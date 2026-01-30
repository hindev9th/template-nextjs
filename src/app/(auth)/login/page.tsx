import { Lock, Wallet } from 'lucide-react';
import ButtonGoogleLogin from '@/app/(auth)/login/_components/ButtonGoogleLogin';
import { getServerSession } from '@/lib/services/getServerSession';
import { redirect } from 'next/navigation';
import ButtonFacebookLogin from '@/app/(auth)/login/_components/ButtonFacebookLogin';
import ButtonAppleLogin from '@/app/(auth)/login/_components/ButtonAppleLogin';

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    return redirect('/');
  }

  return (
    <main className={'bg-background-dark font-display min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden'}>
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none background-decoration" >
      </div>
      <div className="relative w-full max-w-110 bg-surface-dark rounded-2xl shadow-2xl overflow-hidden border border-white/5 z-10">
        <div className="flex flex-col items-center pt-10 pb-6 px-8 text-center">
          <div className="relative group mb-6">
            <div className="absolute -inset-1 bg-primary rounded-full opacity-20 blur group-hover:opacity-40 transition duration-500"></div>
            <div className="relative w-16 h-16 bg-[#0c1a11] rounded-full flex items-center justify-center border border-primary/20 shadow-inner">
              <span className="material-symbols-outlined text-primary text-[32px]"><Wallet /></span>
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Welcome Back</h1>
          <p className="text-[#9db9a6] text-sm font-medium leading-relaxed max-w-70">
            Securely manage your personal and group finances in one place.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-8 pb-6">
          <ButtonGoogleLogin />
          <ButtonFacebookLogin />
          <ButtonAppleLogin />
        </div>
        <div className="px-8 pb-8 pt-2 text-center border-t border-white/5 mx-6 mt-2">
          <div className="flex items-center justify-center gap-2 mb-4 text-[#5c7a65]">
            <span className="material-symbols-outlined text-[16px]"><Lock size={14} /></span>
            <span className="text-xs uppercase tracking-wider font-bold">Secure SSL Connection</span>
          </div>
          <p className="text-xs leading-5 text-[#5c7a65]">
            By signing in, you agree to our
            <a className="text-[#9db9a6] hover:text-primary font-semibold transition-colors" href="#">Terms of Service</a>
            and
            <a className="text-[#9db9a6] hover:text-primary font-semibold transition-colors" href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </main>
  )
}