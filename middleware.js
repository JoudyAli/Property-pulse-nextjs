import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // لو ما فيه توكن، نعيد التوجيه لصفحة تسجيل الدخول
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/signin"; // أو أي صفحة تسجيل دخول عندك
    return NextResponse.redirect(url);
  }

  // لو فيه توكن، نسمح بالوصول
  return NextResponse.next();
}

export const config = {
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
