import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

const handdler = NextAuth(authOptions);

export { handdler as GET, handdler as POST };
