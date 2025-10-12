import { NextResponse } from "next/server";

export const config = {
  matcher: ["/env-test"], // only run for this path
};

export default function middleware(req) {
  const secret = process.env.NEXTAUTH_SECRET;

  console.log("🧪 ENV TEST middleware triggered!");
  console.log("NEXTAUTH_SECRET value:", secret);

  const url = req.nextUrl.clone();

  if (!secret) {
    url.pathname = "/no-secret";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
