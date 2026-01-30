'use client'
import { BadgeQuestionMark, ShieldUser, Users } from 'lucide-react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Questions() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.question-title', {
      y: 40,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.question-title',
        start: 'top 75%',
      },
    });

    gsap.from('.question-desc', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      scrollTrigger: {
        trigger: '.question-desc',
        start: 'top 75%',
      },
    });

    gsap.from('.question-row > *', {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.question-row',
        start: 'top 80%',
      },
    });
  }, { scope: scopeRef });

  return (
    <section ref={scopeRef} className="w-full px-6 py-20 border-y border-[#28392e] bg-[#0d1c12]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-12 text-center">
          <h2 className="question-title text-3xl font-bold text-white">Câu hỏi thường gặp</h2>
          <p className="question-desc text-slate-400">Dự án này là tâm huyết cá nhân và hoàn toàn phi lợi nhuận.</p>
        </div>
        <div className="question-row space-y-4">
          <div className="border border-[#3b5443] rounded-xl bg-surface-dark p-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary"><BadgeQuestionMark /></span>
              Dự án này có thực sự miễn phí không?
            </h3>
            <p className="text-slate-400">Đúng vậy! Đây là một dự án cá nhân phi lợi nhuận. Tôi tạo ra nó để giúp mọi người quản lý tài chính tốt hơn. Không có phí ẩn, không quảng cáo và sẽ miễn phí mãi mãi.</p>
          </div>
          <div className="border border-[#3b5443] rounded-xl bg-surface-dark p-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary"><ShieldUser /></span>
              Dữ liệu của tôi có được bảo mật không?
            </h3>
            <p className="text-slate-400">Bảo mật là ưu tiên hàng đầu. Dữ liệu của bạn được mã hóa và không bao giờ được chia sẻ với bên thứ ba. Vì đây là dự án phi lợi nhuận, tôi không có động cơ để bán dữ liệu của bạn.</p>
          </div>
          <div className="border border-[#3b5443] rounded-xl bg-surface-dark p-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary"><Users /></span>
              Tôi có thể mời bao nhiêu người vào nhóm?
            </h3>
            <p className="text-slate-400">Hiện tại không có giới hạn cứng về số lượng thành viên trong một nhóm chi tiêu. Bạn có thể thoải mái thêm bạn bè, người thân hoặc đồng nghiệp.</p>
          </div>
        </div>
      </div>

    </section>
  )
}