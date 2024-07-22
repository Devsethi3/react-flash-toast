import { useState, useCallback, useEffect } from "react";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  content?: React.ReactNode;
  type?: "success" | "error" | "info" | "warning" | "default";
  position?: ToastPosition;
  duration?: number;
  style?: React.CSSProperties;
}

let toastSingleton: (toast: Omit<ToastItem, "id" | "position">) => void;

const useToast = (defaultPosition: ToastPosition = "top-center") => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const toast = useCallback(
    ({
      title,
      description,
      content,
      type = "success",
      duration = 3000,
      style,
    }: Omit<ToastItem, "id" | "position"> & { content?: React.ReactNode }) => {
      if (!isMounted) return;

      const newToast: ToastItem = {
        id: Date.now().toString(),
        title,
        description,
        content,
        type,
        position: defaultPosition,
        duration,
        style,
      };
      setToasts((prevToasts) => [...prevToasts, newToast]);
    },
    [defaultPosition, isMounted]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    toastSingleton = toast;
    return () => {
      toastSingleton = () => {};
    };
  }, [toast]);

  return { toasts, toast, removeToast };
};

export const toast = ({
  title,
  description,
  content,
  type = "success",
  duration = 3000,
  style,
}: Omit<ToastItem, "id" | "position"> & { content?: React.ReactNode }) => {
  if (typeof window !== "undefined" && toastSingleton) {
    toastSingleton({
      title,
      description,
      content,
      type,
      duration,
      style,
    });
  }
};

export default useToast;
