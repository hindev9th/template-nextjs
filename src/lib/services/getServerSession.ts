import { getServerSession as getServerSideSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const getServerSession = async () => getServerSideSession(authOptions)