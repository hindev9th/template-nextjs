import { Metadata } from 'next';
export function generateMetadata(): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  return {
    title: 'Quản lý chi tiêu thông minh – Theo dõi thu chi & tài chính cá nhân',
    description:
      'Ứng dụng quản lý chi tiêu giúp theo dõi thu chi hàng ngày, phân loại chi phí và kiểm soát tài chính cá nhân một cách đơn giản, hiệu quả.',

    alternates: {
      canonical: baseUrl,
    },
    keywords: ['chi tiêu', 'quản lý chi tiêu', 'quản lý chi tiêu nhóm', 'quản lý chi tiêu group'],

    openGraph: {
      type: 'website',
      url: baseUrl,
      title: 'Quản lý chi tiêu thông minh – Theo dõi thu chi & tài chính cá nhân',
      description:
        'Theo dõi thu chi, quản lý chi tiêu hàng ngày và kiểm soát dòng tiền của bạn dễ dàng.',
      images: [
        {
          url: `${baseUrl}/images/preview.png`,
          width: 1200,
          height: 630,
          alt: 'Quản lý chi tiêu cá nhân',
        },
      ],
    },
  };
}
