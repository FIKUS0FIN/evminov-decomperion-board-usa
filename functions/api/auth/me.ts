import { AuthEnv, getSessionUser, jsonResponse } from "../../_lib/auth";

export const onRequestGet: PagesFunction<AuthEnv> = async ({ request, env }) => {
  const user = await getSessionUser(request, env);
  return jsonResponse({
    ok: true,
    user,
    googleOAuthEnabled: Boolean(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET),
  });
};
