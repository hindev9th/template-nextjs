import {getServerSession as getServerSessionNextAuth} from "next-auth";
import { AuthOptions } from '@/lib/services/authOptions';

export const getServerSession = () => {
  return getServerSessionNextAuth(AuthOptions);
}
