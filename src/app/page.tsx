import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'home day',
  description: 'test seo home day',
  keywords: ['home', 'day ne', 'seo nextjs', 'next js seo'],
  creator: 'hin',
  alternates: {
    canonical: 'http://localhost:3000/',
  },
  openGraph: {
    title: 'home day',
    description: 'test seo home day',
    images: [
      {
        url: '/images/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'About MySite',
      },
    ],
  },
  twitter: {
    title: 'home day',
    description: 'test seo home day',
    images: [
      {
        url: '/images/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'About MySite',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    'max-image-preview': 'large',
  },
};

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
export default function Home() {
  return (
    <div className='grid min-h-screen transform-none grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <header>
        <h1>Home Day</h1>
      </header>
      <main className='row-start-2 flex flex-col items-center gap-8 sm:items-start'>
        <Image
          className='dark:invert'
          src='https://nextjs.org/icons/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <ol className='list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left'>
          <li className='mb-2'>
            Get started by editing{' '}
            <code className='rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]'>
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className='flex flex-col items-center gap-4 sm:flex-row'>
          <a
            className='flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:h-12 sm:px-5 sm:text-base'
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='dark:invert'
              src='https://nextjs.org/icons/vercel.svg'
              alt='Vercel logomark'
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className='flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base'
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className='row-start-3 flex flex-wrap items-center justify-center gap-6'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='https://nextjs.org/icons/file.svg'
            alt='File icon'
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='https://nextjs.org/icons/window.svg'
            alt='Window icon'
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='https://nextjs.org/icons/globe.svg'
            alt='Globe icon'
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Hướng dẫn SEO Next.js 14',
            description: 'Tối ưu website Next.js 14 cho Google SEO',
            author: { '@type': 'Person', name: 'Hiện Nguyên' },
            publisher: {
              '@type': 'Organization',
              name: 'MySite',
              logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/images/preview.jpg`,
              },
            },
            datePublished: '2025-11-12',
            image: `${baseUrl}/images/preview.jpg`,
            url: baseUrl,
          }),
        }}
      />
    </div>
  );
}
