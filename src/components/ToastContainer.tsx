// src/components/ToastContainer.tsx
import React from "react";
import Toast from "./Toast";
import { ToastItem } from "../hooks/useNotification";

interface ToastContainerProps {
  toasts: ToastItem[];
  removeToast: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  removeToast,
}) => {
  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          title={toast.title}
          description={toast.description}
          content={toast.content}
          type={toast.type}
          position={toast.position}
          duration={toast.duration}
          style={toast.style}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );
};

export default ToastContainer;
