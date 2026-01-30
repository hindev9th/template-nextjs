export default function Jsonld() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Expense Manager",
    url: baseUrl,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description:
      "Ứng dụng quản lý chi tiêu giúp theo dõi thu chi, kiểm soát tài chính cá nhân và quản lý dòng tiền hiệu quả.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "VND",
    },
    publisher: {
      "@type": "Organization",
      name: "Expense Manager",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": baseUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
