import { NextResponse } from "next/server";

export function middleware(request) {
  const dummyUserData = {
    role: "admin",
    email: "admin@gmail.com",
  };

  const isCollegePage = request.nextUrl.pathname.startsWith("/college");
  const isAdmin = dummyUserData.role === "admin";

  if (isCollegePage && !isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
