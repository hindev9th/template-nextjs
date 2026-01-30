'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Autoplay from 'embla-carousel-autoplay';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Minh Tuấn',
    sub: 'Freelancer',
    content: 'Ứng dụng này làm cho việc sống chung với bạn cùng phòng dễ dàng hơn nhiều! Không còn tranh cãi về việc ai trả tiền bánh pizza hay internet.'
  },{
    name: 'Thu Hà',
    sub: 'Quản lý Sản phẩm',
    content: 'Tôi thích chế độ tối và thống kê thời gian thực. Đây là ứng dụng tài chính đầu tiên thực sự đẹp và hoạt động hoàn hảo.'
  },{
    name: 'Hải Đăng',
    sub: 'Sinh viên',
    content: 'Chia hóa đơn cuối cùng cũng không còn căng thẳng. Các thông báo đã cứu tôi khỏi phí trễ hạn nhiều lần.'
  },{
    name: 'Thanh Hương',
    sub: 'Nhà thiết kế',
    content: 'Trực quan hóa chi phí giúp tôi tiết kiệm cho kỳ nghỉ mơ ước. Giao diện sạch sẽ và trực quan.'
  },
]

export default function Reviews() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.review-title', {
      y: 40,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.review-title',
        start: 'top 75%',
      },
    });

    gsap.from('.review-col > *', {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.review-col',
        start: 'top 80%',
      },
    });
  }, { scope: scopeRef });

  return (
    <section ref={scopeRef} className="w-full max-w-7xl px-6 py-20 lg:py-32">
      <h2 className="review-title text-3xl font-bold text-center mb-12">Được yêu thích bởi <span className="text-primary">người dùng thông minh</span></h2>
      <div className="flex w-full gap-6 pb-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            })
          ]}
          className="w-full review-col"
        >
          <CarouselContent>
            {reviews.map((item, index) => (
              <CarouselItem key={index} className="w-full sm:basis-1/2 lg:basis-1/3">
                <div className="w-full max-w-dvw sm:max-w-75 md:max-w-87.5 h-full mx-auto snap-center flex flex-col p-6 rounded-2xl bg-surface-dark border border-[#3b5443]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-cover bg-center grid place-content-center bg-background-card" data-alt={`Chân dung của ${item.name}`}>{item.name.substring(0,1).toUpperCase()}</div>
                    <div>
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.sub}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic">{item.content}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/*<CarouselPrevious />*/}
          {/*<CarouselNext />*/}
        </Carousel>
      </div>
    </section>
  )
}