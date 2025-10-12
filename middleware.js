export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
