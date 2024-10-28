import { Toaster } from 'sonner';

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
      {children}
    </>
  );
}
