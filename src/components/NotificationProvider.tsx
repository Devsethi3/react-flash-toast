import React, { createContext, useContext } from "react";
import useNotification, { ToastPosition } from "../hooks/useNotification";
import ToastContainer from "./ToastContainer";

type NotificationContextType = ReturnType<typeof useNotification>;

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must be used within a NotificationProvider"
    );
  }
  return context;
};

interface NotificationProviderProps {
  children: React.ReactNode;
  defaultPosition?: ToastPosition;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
  defaultPosition = "top-center",
}) => {
  const notificationHook = useNotification(defaultPosition);

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

export default NotificationProvider;
