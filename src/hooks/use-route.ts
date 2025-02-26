import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Url } from 'node:url';
import { TransitionOptions } from '@/types';
import { notifyNoInterNet } from '@/lib/utils';

export default function useRoute() {
  const router = useRouter();

  const push = useCallback((url: Url, as?: Url, options?: TransitionOptions) => {
    if (notifyNoInterNet()) return;
    return router.push(url, as, options);
  }, [router]);

  const replace = useCallback((url: Url, as?: Url, options?: TransitionOptions) => {
    if (notifyNoInterNet()) return;
    return router.replace(url, as, options);
  }, [router]);

  const reload = useCallback(() => {
    if (notifyNoInterNet()) return;
    return router.reload();
  }, [router]);

  const back = useCallback(() => {
    if (notifyNoInterNet()) return;
    return router.back();
  }, [router]);

  return {
    push,
    back,
    replace,
    reload
  }
}
