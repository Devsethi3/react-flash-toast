import React, { useState, useCallback, useEffect, useRef } from "react";
import { Icons } from "./components/Icons";

interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  type?: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
  style?: React.CSSProperties;
}

const FlashToast: React.FC<ToastProps> = ({
  title,
  description,
  content,
  type = "info",
  onClose,
  duration = 3000,
  style = {},
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    timerRef.current = window.setTimeout(() => {
      setIsExiting(true);
    }, duration);
  };

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [duration]);

  const handleMouseEnter = () => clearTimer();
  const handleMouseLeave = () => startTimer();

  const handleAnimationEnd = (e: React.AnimationEvent) => {
    if (e.animationName === "flashToastExit") {
      onClose();
    }
  };

  return (
    <div
      className={`flash-toast flash-toast-${type} ${
        isExiting ? "flash-toast-exit" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onAnimationEnd={handleAnimationEnd}
      style={style}
    >
      <div className="flash-toast-icon">{Icons[type]}</div>
      <div className="flash-toast-content">
        {title && <h3 className="flash-toast-title">{title}</h3>}
        {description && (
          <p className="flash-toast-description">{description}</p>
        )}
        {content && <div>{content}</div>}
      </div>
      <button className="flash-toast-close" onClick={() => setIsExiting(true)}>
        ×
      </button>
    </div>
  );
};

interface ToastItem extends Omit<ToastProps, "onClose"> {}

export const Toaster: React.FC = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    const handleToast = (event: CustomEvent<ToastItem>) => {
      setToasts((prevToasts) => [...prevToasts, event.detail]);
    };

    window.addEventListener("flash-toast" as any, handleToast as EventListener);

    return () => {
      window.removeEventListener(
        "flash-toast" as any,
        handleToast as EventListener
      );
    };
  }, []);

  return (
    <div className="flash-toast-container">
      {toasts.map((toast) => (
        <FlashToast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export const toast = (
  title: string,
  description?: string,
  content?: React.ReactNode,
  type: "success" | "error" | "info" = "info",
  duration?: number,
  style?: React.CSSProperties
) => {
  const event = new CustomEvent("flash-toast", {
    detail: {
      id: Date.now().toString(),
      title,
      description,
      content,
      type,
      duration,
      style,
    },
  });
  window.dispatchEvent(event);
};

const style = `
@keyframes flashToastEnter {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes flashToastExit {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
}

.flash-toast-container {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 9999;
}
.flash-toast {
  margin-bottom: 8px;
  padding: 12px 20px;
  border-radius: 4px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  animation: flashToastEnter 0.3s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;
  max-width: 350px;
}
.flash-toast-exit {
  animation: flashToastExit 0.3s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;
}
.flash-toast-success { background-color: #4caf50; }
.flash-toast-error { background-color: #f44336; }
.flash-toast-info { background-color: #2196f3; }
.flash-toast-icon {
  margin-right: 12px;
  flex-shrink: 0;
}
.flash-toast-content {
  flex-grow: 1;
}
.flash-toast-title {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}
.flash-toast-description {
  margin: 4px 0 0;
  font-size: 14px;
}
.flash-toast button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  padding: 0;
  line-height: 1;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}
.flash-toast button:hover {
  opacity: 1;
}
`;

const injectStyle = () => {
  if (!document.getElementById("flash-toast-style")) {
    const styleElement = document.createElement("style");
    styleElement.id = "flash-toast-style";
    styleElement.textContent = style;
    document.head.appendChild(styleElement);
  }
};

injectStyle();
