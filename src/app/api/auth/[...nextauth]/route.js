import CredentialsProvider from "next-auth/providers/credentials";
import nextAuth from "next-auth";
import { loginForm } from "../../../../../service/loginForm";
export const authOption = {
  providers: [
    CredentialsProvider({
      async authorize(userDetail) {
        const detail = {
          email: userDetail.email,
          password: userDetail.password,
        };
        console.log(detail);
        const login = await loginForm(detail);
        // console.log(login);
        return login;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log(token);
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      // console.log(token, "hello", session);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
