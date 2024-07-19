import React, { useState, useEffect, useCallback } from "react";
import { Icons } from "./Icons";

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

const style = `
  @keyframes flashToastEnterTop {
    from { transform: translateY(-120%) scale(0.9); opacity: 0; }
    to { transform: translateY(0) scale(1); opacity: 1; }
  }
  
  @keyframes flashToastEnterBottom {
    from { transform: translateY(120%) scale(0.9); opacity: 0; }
    to { transform: translateY(0) scale(1); opacity: 1; }
  }
  
  @keyframes flashToastExitTop {
    from { transform: translateY(0) scale(1); opacity: 1; }
    to { transform: translateY(-120%) scale(0.9); opacity: 0; }
  }

  @keyframes flashToastExitBottom {
    from { transform: translateY(0) scale(1); opacity: 1; }
    to { transform: translateY(120%) scale(0.9); opacity: 0; }
  }
  
  .flash-toast-container {
    position: fixed;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 380px;
    width: 100%;
  }

  .flash-toast-container.top-left,
  .flash-toast-container.top-center,
  .flash-toast-container.top-right { top: 24px; }

  .flash-toast-container.bottom-left,
  .flash-toast-container.bottom-center,
  .flash-toast-container.bottom-right {
    bottom: 24px;
    flex-direction: column-reverse;
  }

  .flash-toast-container.top-left,
  .flash-toast-container.bottom-left {
    left: 24px;
    align-items: flex-start;
  }

  .flash-toast-container.top-center,
  .flash-toast-container.bottom-center {
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
  }

  .flash-toast-container.top-right,
  .flash-toast-container.bottom-right { right: 24px; }

  .flash-toast {
    display: flex;
    align-items: flex-start;
    margin: 12px 0;
    padding: 16px;
    border-radius: 8px;
    color: #333;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 100%;
    pointer-events: auto;
    transition: all 0.3s ease;
    background-color: #ffffff;
    border-left: 4px solid #9e9e9e;
  }

  .flash-toast:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  .flash-toast-success { 
    background-color: #96f4bf; 
    border-left: 4px solid #2ff487; 
    color: #04593a; 
  }
  .flash-toast-error { 
    background-color: #ffcfcf; 
    border-left: 4px solid #fe3636; 
    color: #590404; 
  }
  .flash-toast-info { 
    background-color: #b3cbff; 
    border-left: 4px solid #2f32f4; 
    color: #041e59;  
  }
  .flash-toast-warning { 
    background-color: #ffe4b3; 
    border-left: 4px solid #f5a623; 
    color: #593004; 
  }
  .flash-toast-default { 
    background-color: #f7f7f7; 
    border-left: 4px solid #9e9e9e; 
    color: #333; 
  }

  .flash-toast-icon {
    margin-right: 16px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: 24px;
  }

  .flash-toast-content {
    flex-grow: 1;
    word-break: break-word;
  }

  .flash-toast-title {
    font-weight: 600;
    font-size: 16px;
    margin: 0 0 4px 0;
  }

  .flash-toast-description {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.9;
  }

  .flex-item {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  .flash-toast-close {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-size: 20px;
    padding: 4px;
    line-height: 1;
    transition: opacity 0.3s ease;
    margin-left: 16px;
    opacity: 0.6;
  }

  .flash-toast-close:hover { opacity: 1; }
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

interface ToastProps {
  title?: string;
  description?: string;
  content?: React.ReactNode;
  type?: "success" | "error" | "info" | "warning" | "default";
  onClose: () => void;
  position?: ToastPosition;
  duration?: number;
  style?: React.CSSProperties;
}

const Toast: React.FC<ToastProps> = ({
  title,
  description,
  content,
  type = "default",
  onClose,
  position = "top-center",
  duration = 3000,
  style = {},
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleAnimationEnd = useCallback(
    (e: React.AnimationEvent) => {
      if (e.animationName.includes("flashToastExit")) {
        onClose();
      }
    },
    [onClose]
  );

  const isBottom = position.startsWith("bottom");
  const animationName = isExiting
    ? isBottom
      ? "flashToastExitBottom"
      : "flashToastExitTop"
    : isBottom
    ? "flashToastEnterBottom"
    : "flashToastEnterTop";

  return (
    <div className={`flash-toast-container ${position}`}>
      <div
        className={`flash-toast flash-toast-${type}`}
        style={{
          animation: `${animationName} 0.4s cubic-bezier(0.21, 1.02, 0.73, 1) forwards`,
          ...style,
        }}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="flex-item">
          <div className="flash-toast-icon">{Icons[type]}</div>
          <div className="flash-toast-content">
            {title && <h3 className="flash-toast-title">{title}</h3>}
            {description && (
              <p className="flash-toast-description">{description}</p>
            )}
            {content && <div>{content}</div>}
          </div>
          <button
            className="flash-toast-close"
            onClick={() => setIsExiting(true)}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
