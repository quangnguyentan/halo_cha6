import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export async function middleware(req) {
  const token = await getToken({ req });
  const url = req.nextUrl.clone(); // Sử dụng clone để kiểm tra URL

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Kiểm tra vai trò của người dùng
  if (token.role === "admin") {
    // Nếu đã ở trang dashboard thì không cần chuyển hướng
    if (url.pathname !== "/dashboard") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  } else {
    // Nếu đã ở trang chats thì không cần chuyển hướng
    if (url.pathname !== "/chats") {
      return NextResponse.redirect(new URL("/chats", req.url));
    }
  }

  return NextResponse.next(); // Tiếp tục nếu không cần chuyển hướng
}

export const config = {
  matcher: [
    "/chats/:path*",
    "/contacts/:path*",
    "/profile/:path*",
    "/dashboard/:path*",
  ],
};
