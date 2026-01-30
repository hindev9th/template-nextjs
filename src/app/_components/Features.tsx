'use client'
import { Calendar, ChartPie, Users } from 'lucide-react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.features-title', {
      y: 40,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.features-title',
        start: 'top 75%',
      },
    });

    gsap.from('.features-desc', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      scrollTrigger: {
        trigger: '.features-desc',
        start: 'top 75%',
      },
    });

    gsap.from('.features-grid > *', {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 75%',
      },
    });
  }, { scope: scopeRef });

  return (
    <section ref={scopeRef} className="w-full max-w-7xl px-6 py-20" id="features">

      <div className="flex flex-col gap-4 mb-16 text-center max-w-3xl mx-auto">
        <h2 className="features-title text-3xl md:text-4xl font-bold leading-tight text-white">
          Mọi thứ bạn cần để <span className="text-primary">quản lý tiền bạc</span>
        </h2>
        <p className="features-desc text-slate-400 text-lg">
          Các tính năng mạnh mẽ được thiết kế để giữ tài chính của bạn trong tầm kiểm soát mà không gây căng thẳng. Ngừng lo lắng về việc tính toán và bắt đầu tận hưởng cuộc sống.
        </p>
      </div>
      <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group flex flex-col gap-6 rounded-2xl border border-[#3b5443] bg-surface-dark p-8 hover:border-primary/50 transition-colors duration-300">
          <div className="w-12 h-12 rounded-full bg-[#28392e] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
            <span className="material-symbols-outlined text-2xl"><Users /></span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white">Chia sẻ chi phí nhóm</h3>
            <p className="text-slate-400 leading-relaxed">Chia hóa đơn với bạn cùng phòng, trong các chuyến đi hoặc bữa tối mà không cần tính toán phức tạp. Chúng tôi xử lý việc chuyển đổi và nhắc nhở.</p>
          </div>
        </div>
        <div className="group flex flex-col gap-6 rounded-2xl border border-[#3b5443] bg-surface-dark p-8 hover:border-primary/50 transition-colors duration-300">
          <div className="w-12 h-12 rounded-full bg-[#28392e] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
            <span className="material-symbols-outlined text-2xl"><ChartPie /></span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white">Thống kê thời gian thực</h3>
            <p className="text-slate-400 leading-relaxed">Trực quan hóa thói quen chi tiêu của bạn ngay khi chúng xảy ra. Xem từng đồng tiền đi đâu với các biểu đồ tương tác đẹp mắt.</p>
          </div>
        </div>
        <div className="group flex flex-col gap-6 rounded-2xl border border-[#3b5443] bg-surface-dark p-8 hover:border-primary/50 transition-colors duration-300">
          <div className="w-12 h-12 rounded-full bg-[#28392e] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
            <span className="material-symbols-outlined text-2xl"><Calendar /></span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white">Theo dõi hóa đơn dễ dàng</h3>
            <p className="text-slate-400 leading-relaxed">Không bao giờ bỏ lỡ ngày đến hạn với các nhắc nhở thông minh. Chỉ cần thiết lập và quên đi, chúng tôi sẽ nhắc bạn khi đến lúc phải thanh toán.</p>
          </div>
        </div>
      </div>
    </section>
  )
}