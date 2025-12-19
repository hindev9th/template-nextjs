import { Metadata } from 'next';

export function generateMetadata({params}: {params: {id: string}}): Metadata {
  return {
    title: `Post ${params.id} Title`,
    description: `This is the description for post ${params.id}.`,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_APP_API_URL
    },
    openGraph: {
      title: `Post ${params.id} Title`,
      description: `This is the description for post ${params.id}.`,
      images: [
        {
          url: '/images/preview.jpg',
          width: 1200,
          height: 630,
          alt: `Post ${params.id} Preview Image`,
        },
      ]
    }
  };
}
