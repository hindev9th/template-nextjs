import NextAuth from "next-auth"
declare module "next-auth" {
  interface Session {
    user: {
      sub: string;
      name: string;
      email: string;
      image?: string;
      accessToken: string;
      refreshToken: string;
    }
    expires: string;
  }
  interface User {
    sub: string;
    name: string;
    email: string;
    image?: string;
    accessToken: string;
    refreshToken: string;
  }
}