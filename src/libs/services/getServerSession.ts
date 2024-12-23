import {getServerSession as getServerSessionNextAuth} from "next-auth";
import { AuthOptions } from '@/libs/services/authOptions';

export const getServerSession = () => {
  return getServerSessionNextAuth(AuthOptions);
}
