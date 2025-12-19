import Jsonld from '@/app/post/[id]/_seo/jsonld';
import { Suspense } from 'react';
import PostContent from '@/app/post/[id]/_components/PostContent';
export { generateMetadata } from '@/app/post/[id]/_seo/metadata';

export default function PostDetailScreen({params}: {params: {id: string}}) {
  return (
    <>
      <Jsonld slug={""} />

      <Suspense fallback={<div>Loading post...</div>}>
        <PostContent id={params.id} />
      </Suspense>
    </>
  );
}
