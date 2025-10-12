import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log("Middleware triggered for:", req.nextUrl.pathname);
    console.log("Token exists:", !!req.nextauth.token);
    console.log("User:", req.nextauth.token?.email);
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        console.log("Authorization check for:", req.nextUrl.pathname);
        console.log("Token present:", !!token);
        console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
