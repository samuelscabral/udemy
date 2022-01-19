import React, { createContext, useState, useEffect } from "react";

interface NotificationData {
  status: string;
  title?: string;
  message?: string;
}

interface NotificationContextProviderProps {
  children: React.ReactNode;
}

interface NotificationContextType {
  notification?: NotificationData;
  showNotification: (notificationData: NotificationData) => void;
  hideNotification: () => void;
}

const NotificationContext = createContext({} as NotificationContextType);

export function NotificationContextProvider({
  children,
}: NotificationContextProviderProps) {
  const [activeNotification, setActiveNotification] =
    useState<NotificationData>();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(undefined);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData: NotificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(undefined);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
