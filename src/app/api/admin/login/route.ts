import { NextResponse } from "next/server";
import {
  adminSessionCookieOptions,
  createAdminSession,
  verifyAdminLogin,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const username = body.username?.trim() ?? "";
  const password = body.password ?? "";

  try {
    if (!verifyAdminLogin(username, password)) {
      return NextResponse.json({ error: "Identifiants incorrects" }, { status: 401 });
    }
    const token = await createAdminSession();
    const res = NextResponse.json({ ok: true });
    res.cookies.set(adminSessionCookieOptions(token));
    return res;
  } catch {
    return NextResponse.json(
      { error: "Configuration admin manquante (AUTH_SECRET / ADMIN_PASSWORD)" },
      { status: 500 },
    );
  }
}
