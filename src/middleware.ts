import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  async function middleware(req) {

    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login",
    },
  }
);


export const config = {
  matcher: ["/((?!api|/login|_next/static|_next/image|icons|favicon.ico).*)"],
}
