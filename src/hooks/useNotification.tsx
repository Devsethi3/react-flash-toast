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
  type?: "success" | "error" | "info";
  position?: ToastPosition;
  duration?: number;
  style?: React.CSSProperties;
}

let addToastSingleton: (toast: Omit<ToastItem, "id" | "position">) => void;

const useNotification = (defaultPosition: ToastPosition = "top-center") => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback(
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
        position: defaultPosition, // Use defaultPosition from the hook
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
  addToastSingleton = addToast;

  return { toasts, addToast, removeToast };
};

// Export the singleton addToast function
export const addToast = ({
  title,
  description,
  content,
  type = "success",
  duration = 3000,
  style,
}: Omit<ToastItem, "id" | "position"> & { content?: React.ReactNode }) => {
  if (addToastSingleton) {
    addToastSingleton({
      title,
      description,
      content,
      type,
      duration,
      style,
    });
  } else {
    console.warn("addToast called before initialization.");
  }
};

export default useNotification;
