import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
const Handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
    }),
  ],
  async authorize(credentials, req) {
    console.log(credentials);
  },
  session: {
    strategy: "jwt",
  },
  pages: "/login",
});

export { Handler as GET, Handler as POST };
