import { NextResponse } from 'next/server';
// import { withAuth } from 'next-auth/middleware';

export async function middleware() {

  return NextResponse.next();
}


/**
 * middleware next auth
 */
// export default withAuth(
//   async function middleware(req) {
//
//     return NextResponse.next();
//   },
//   {
//     pages: {
//       signIn: "/login",
//     },
//   }
// );
//
//
// export const config = {
//   matcher: ["/((?!api|/login|_next/static|_next/image|icons|favicon.ico).*)"],
// }
