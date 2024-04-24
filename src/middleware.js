import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export default function middleware(request) {
  const token = request.cookies.get("next-auth.session-token")?.value;
  console.log("token Middleware : ", token);
  const path = request.nextUrl.pathname;
  if (!token && path != "auth/login") {
    return NextResponse.redirect(new URL("auth/login", request.url));
  }
}
export const config = { matcher: ["/"] };
