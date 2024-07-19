import React, { createContext, useContext } from "react";
import useToast, { ToastPosition } from "../hooks/useToast";
import ToastContainer from "./ToastContainer";

type NotificationContextType = ReturnType<typeof useToast>;

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useToastContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useToastContext must be used within a ToastProvider"
    );
  }
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
  defaultPosition?: ToastPosition;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  defaultPosition = "top-center",
}) => {
  const notificationHook = useToast(defaultPosition);

  return (
    <NotificationContext.Provider value={notificationHook}>
      {children}
      <ToastContainer
        toasts={notificationHook.toasts}
        removeToast={notificationHook.removeToast}
      />
    </NotificationContext.Provider>
  );
};

export default ToastProvider;
