'use client'
import { BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          '.hero-subtitle',
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-actions > *',
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.4,
          },
          '-=0.3'
        )
        .from(
          '.hero-image',
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        );

      // Glow animation (loop nhẹ)
      gsap.to('.hero-glow', {
        opacity: 0.7,
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef }
  );
  return (
    <section ref={containerRef} className="hero-section w-full max-w-7xl px-6 py-16 md:py-24 relative">
      <div className="hero-glow absolute bg-primary/20 blur-3xl rounded-full opacity-50 z-0  sm:w-full h-full "></div>
      <div className="@container">
        <div className="flex flex-col gap-12 @[864px]:flex-row @[864px]:items-center">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="hero-title text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-white">
                Quản lý chi tiêu cùng nhau, <span className="text-primary">không còn áp lực</span>
              </h1>
              <h2 className="hero-subtitle text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl">
                Theo dõi chi tiêu cá nhân và chia hóa đơn nhóm ngay lập tức. Cách thông minh nhất để xử lý tài chính chung mà không cần những cuộc nói chuyện khó xử.
              </h2>
            </div>
            <div className="hero-actions flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-background-dark text-base font-bold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(19,236,91,0.3)]">
                Bắt đầu ngay
              </Button>
              <Button className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#28392e] text-white text-base font-bold hover:bg-[#344b3c] transition-colors">
                Xem Demo
              </Button>
            </div>
            <div className="hero-actions flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-primary text-lg"><BadgeCheck /></span>
              <span>Không cần thẻ tín dụng</span>
              <span className="mx-2">•</span>
              <span className="material-symbols-outlined text-primary text-lg"><BadgeCheck /></span>
              <span>Miễn phí mãi mãi</span>
            </div>
          </div>
          <div className="hero-image w-full flex-1 relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 z-0"></div>
            <div className="relative z-10 w-full bg-center bg-no-repeat aspect-retro bg-cover rounded-2xl shadow-2xl border border-[#28392e]" data-alt="Minh họa bạn bè ngồi quanh bàn tính hóa đơn vui vẻ" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxgp8IV9ypd6dBS3xEj5rbsUkReFGjxAj3Chsf9LFCbrOVcnoggIqwI8ZQDb0i3metElw5mIJDuCNr-2EwnRgkZVTwvdj2vHJYVb8eEZAftsSQbb7Lqs7HpiOR1qgWoY4icPVC9akazqnPfN1N1DGHqmTn7ew8BhjOcfL9LkQUNvZv1c6nEMGoboKtVheTdR_Mxgqe137rbuTesqbr9m4YGldFdwhWQtwOqY6o9o3RwHGzaRJvX_Xjnyl2_sd-j4DeVUZaCqtetz8')"}}>
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-surface-dark/90 backdrop-blur border border-[#3b5443] p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Tổng tiết kiệm</p>
                  <p className="text-xl font-bold text-white">30.500.000₫</p>
                </div>
                <div className="h-8 w-24 bg-linear-to-r from-transparent via-primary/20 to-primary/5 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}