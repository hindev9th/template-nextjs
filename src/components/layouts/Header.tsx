'use client'
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';


export default function Header() {
  const {push, prefetch} = useRouter();
  const {data: session} = useSession();
  console.log(session);
  useEffect(() => {
    prefetch('/login')
  },[prefetch])

  const toLogin = () => {
    push('/login')
  }

  const toLogout = async () => {
    await signOut({
      callbackUrl: '/login',
    });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#28392e]/50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl"><Wallet /></span>
          </div>
          <h2 className="text-lg font-bold tracking-tight text-white">ExpenseManager</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <h3>{session?.user?.name}</h3>
          <Button onClick={toLogout}>LogOut</Button>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            className="flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-bold bg-[#28392e] text-white hover:bg-[#344b3c] transition-colors"
            onClick={toLogin}
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </header>
  )
}