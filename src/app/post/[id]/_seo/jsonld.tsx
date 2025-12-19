// import { getPost } from "@/lib/post";

export default async function Jsonld({ slug }: { slug: string }) {
  // const post = await getPost(slug);
  const post: any = {}

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_APP_URL, // ✅ CANONICAL Ở ĐÂY
    },
    author: {
      "@type": "Person",
      name: post?.author?.name,
    },
    publisher: {
      "@type": "Organization",
      name: "My Blog",
      logo: {
        "@type": "ImageObject",
        url: "https://myblog.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://myblog.com/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
