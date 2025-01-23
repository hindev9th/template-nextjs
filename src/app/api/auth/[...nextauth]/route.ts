import NextAuth from "next-auth"
import { AuthOptions } from '@/lib/services/authOptions';

const handler = NextAuth(AuthOptions);
export { handler as GET, handler as POST };
