import { useState, useCallback } from "react";

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

  const toast = useCallback(
    ({
      title,
      description,
      content,
      type = "success",
      duration = 3000,
      style,
    }: Omit<ToastItem, "id" | "position"> & { content?: React.ReactNode }) => {
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
    [defaultPosition]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  // Assign the singleton functions
  toastSingleton = toast;

  return { toasts, toast, removeToast };
};

// Export the singleton toast function
export const toast = ({
  title,
  description,
  content,
  type = "success",
  duration = 3000,
  style,
}: Omit<ToastItem, "id" | "position"> & { content?: React.ReactNode }) => {
  if (toastSingleton) {
    toastSingleton({
      title,
      description,
      content,
      type,
      duration,
      style,
    });
  } else {
    console.warn("toast called before initialization.");
  }
};

export default useToast;
