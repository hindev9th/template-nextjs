import { Toaster } from 'sonner';
import AuthProvider from '@/components/providers/AuthProvider';
import QueryClientProvider from '@/components/providers/query-client-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster
        richColors={true}
        duration={3000}
        closeButton={true}
        position={'top-right'}
        toastOptions={{
          classNames: {
            content: "flex-1",
            closeButton:
              'relative order-1 -mr-1 min-w-5 transform-none',
          }
        }}
      />
      <AuthProvider>
        <QueryClientProvider>
          {children}
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}
