import {
  AuthEnv,
  getSessionUser,
  hashPassword,
  jsonResponse,
  mapUserRow,
  verifyPassword,
} from "../../_lib/auth";

export const onRequestGet: PagesFunction<AuthEnv> = async ({ request, env }) => {
  const user = await getSessionUser(request, env);
  if (!user) return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  return jsonResponse({ ok: true, user });
};

export const onRequestPatch: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!env.DB) {
    return jsonResponse({ ok: false, error: "Database not configured." }, 503);
  }

  const user = await getSessionUser(request, env);
  if (!user) return jsonResponse({ ok: false, error: "Unauthorized" }, 401);

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? user.name).trim().slice(0, 120);
    const phone = String(body.phone ?? user.phone).trim().slice(0, 40);
    const locale = String(body.locale ?? user.locale).trim().slice(0, 10);
    const shippingState = String(body.shippingState ?? user.shippingState).trim().slice(0, 80);
    const shippingCity = String(body.shippingCity ?? user.shippingCity).trim().slice(0, 100);
    const shippingAddress = String(body.shippingAddress ?? user.shippingAddress).trim().slice(0, 220);
    const shippingZip = String(body.shippingZip ?? user.shippingZip).trim().slice(0, 30);
    const deliveryNotes = String(body.deliveryNotes ?? user.deliveryNotes).trim().slice(0, 500);

    // Optional password update / setup (even for Google-only users)
    const newPassword = String(body.newPassword || "");
    const currentPassword = String(body.currentPassword || "");

    if (newPassword) {
      if (newPassword.length < 8) {
        return jsonResponse(
          { ok: false, error: "New password must be at least 8 characters." },
          400
        );
      }
      const existingPwdRow = await env.DB.prepare(
        "SELECT password_hash FROM users WHERE id = ? LIMIT 1"
      )
        .bind(user.id)
        .first<{ password_hash: string | null }>();

      if (existingPwdRow?.password_hash) {
        const valid = await verifyPassword(currentPassword, existingPwdRow.password_hash);
        if (!valid) {
          return jsonResponse(
            { ok: false, error: "Current password is incorrect." },
            400
          );
        }
      }

      const nextHash = await hashPassword(newPassword);
      await env.DB.prepare("UPDATE users SET password_hash = ? WHERE id = ?")
        .bind(nextHash, user.id)
        .run();
    }

    await env.DB.prepare(
      `UPDATE users
       SET name = ?, phone = ?, locale = ?,
           shipping_state = ?, shipping_city = ?, shipping_address = ?,
           shipping_zip = ?, delivery_notes = ?
       WHERE id = ?`
    )
      .bind(
        name,
        phone,
        locale,
        shippingState,
        shippingCity,
        shippingAddress,
        shippingZip,
        deliveryNotes,
        user.id
      )
      .run();

    const updatedRow = await env.DB.prepare(
      `SELECT id, email, name, phone, password_hash, google_id, avatar_url, role, locale,
              shipping_state, shipping_city, shipping_address, shipping_zip, delivery_notes,
              created_at, last_login_at
       FROM users WHERE id = ? LIMIT 1`
    )
      .bind(user.id)
      .first<Parameters<typeof mapUserRow>[0]>();

    return jsonResponse({
      ok: true,
      user: updatedRow ? mapUserRow(updatedRow, env) : user,
    });
  } catch {
    return jsonResponse({ ok: false, error: "Failed to update profile." }, 500);
  }
};
