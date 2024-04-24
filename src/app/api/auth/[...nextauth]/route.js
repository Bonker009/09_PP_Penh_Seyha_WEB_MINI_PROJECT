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
        return login.token;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
