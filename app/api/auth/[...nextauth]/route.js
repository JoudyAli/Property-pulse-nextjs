import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

const handdler = NextAuth(authOptions);

export { handdler as Get, handdler as Post };
