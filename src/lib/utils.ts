import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from 'sonner';

const toastList = new Set();
const MAX_TOAST = 1;


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const notifyNoInterNet = () => {
  if (!navigator.onLine) {
    if (toastList.size < MAX_TOAST) {
      const id: any = toast.error(
        'Connection lost. Please check your internet and try again.',
        {
          onAutoClose: () => toastList.delete(id),
        }
      );
      toastList.add(id);
    }
    return true;
  }
  return false;
};
