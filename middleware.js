import { withAuth } from "next-auth/middleware";

console.log(
  "🧩 NEXTAUTH_SECRET available in Edge:",
  !!process.env.NEXTAUTH_SECRET
);
console.log("🧩 NEXTAUTH_URL:", process.env.NEXTAUTH_URL);

export default withAuth(
  function middleware(req) {
    return;
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
