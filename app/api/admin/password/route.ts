import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  isAdminAuthenticated,
  changePassword,
  createAuthToken,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { oldPassword, newPassword } = (await request.json()) as {
      oldPassword?: string;
      newPassword?: string;
    };

    if (!oldPassword || !newPassword) {
      return NextResponse.json(
        { error: "Оба поля обязательны" },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: "Минимум 6 символов" },
        { status: 400 }
      );
    }

    const ok = await changePassword(oldPassword, newPassword);
    if (!ok) {
      return NextResponse.json(
        { error: "Неверный текущий пароль" },
        { status: 401 }
      );
    }

    const token = createAuthToken(newPassword);
    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ошибка смены пароля" },
      { status: 500 }
    );
  }
}
