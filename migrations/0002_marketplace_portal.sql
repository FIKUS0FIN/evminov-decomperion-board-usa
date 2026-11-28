-- Evminov Spine Systems USA — Marketplace Portal & Admin CRM Migration
-- Adds saved shipping address fields to users and order_events timeline table

ALTER TABLE users ADD COLUMN shipping_state TEXT NOT NULL DEFAULT '';
ALTER TABLE users ADD COLUMN shipping_city TEXT NOT NULL DEFAULT '';
ALTER TABLE users ADD COLUMN shipping_address TEXT NOT NULL DEFAULT '';
ALTER TABLE users ADD COLUMN shipping_zip TEXT NOT NULL DEFAULT '';
ALTER TABLE users ADD COLUMN delivery_notes TEXT NOT NULL DEFAULT '';

CREATE TABLE IF NOT EXISTS order_events (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL,
  event_type TEXT NOT NULL DEFAULT 'status_change',
  status TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  author_role TEXT NOT NULL DEFAULT 'system',
  author_name TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_order_events_order_id ON order_events(order_id, created_at ASC);
