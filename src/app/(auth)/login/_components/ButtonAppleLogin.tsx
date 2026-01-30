'use client'
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

export default function ButtonAppleLogin() {
  const handleLogin = async () => {
    await signIn('apple');
  }
  return (
    <Button onClick={handleLogin} className="relative flex items-center justify-center w-full h-14 px-4 bg-black text-white rounded-xl transition-all duration-200 hover:shadow-[0_0_0_2px_#13ec5b] hover:-translate-y-0.5 border border-white/10 group">
      <div className="absolute left-6 w-6 h-6 text-white">
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={'size-full'}>
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74s2.57-.99 4.31-.82c.72.03 2.81.31 3.84 1.84-3.32 1.92-2.72 6.01.55 7.31-.67 1.78-1.58 3.55-3.78 3.9zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.54 4.33-3.74 4.25z"></path>
        </svg>
      </div>
      <span className="text-base font-bold tracking-wide">Continue with Apple</span>
    </Button>
  )
}