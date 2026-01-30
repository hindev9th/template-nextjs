'use client'

import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function StartSection() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.title', {
      y: 40,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.title',
        start: 'top 75%',
      },
    });

    gsap.from('.desc', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      scrollTrigger: {
        trigger: '.desc',
        start: 'top 75%',
      },
    });

    gsap.from('.action', {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.action',
        start: 'top 75%',
      },
    });
  }, { scope: scopeRef });
  return (
    <section ref={scopeRef} className="w-full max-w-240 px-6 pb-20">
      <div className="title rounded-3xl bg-linear-to-br from-[#1c271f] to-background-dark border border-[#3b5443] p-10 md:p-16 text-center">
        <h2 className="title text-3xl md:text-5xl font-black mb-6">Sẵn sàng kiểm soát tài chính?</h2>
        <p className="desc text-slate-400 text-lg mb-8 max-w-xl mx-auto">Tham gia cùng hàng ngàn người dùng đang quản lý tiền bạc thông minh hơn, nhanh hơn và không áp lực.</p>
        <div className="action flex flex-col sm:flex-row justify-center gap-4">
          <Button className="rounded-lg h-14 px-8 bg-primary text-background-dark text-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Bắt đầu ngay
          </Button>
          <Button className="rounded-lg h-14 px-8 bg-transparent border border-slate-600 text-white text-lg font-bold hover:border-white transition-colors">
            Liên hệ hỗ trợ
          </Button>
        </div>
      </div>
    </section>
  )
}