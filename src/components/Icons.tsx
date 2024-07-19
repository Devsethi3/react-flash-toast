import React from "react";

const iconStyle = `
  @keyframes successCheck {
    0% { stroke-dashoffset: 124; opacity: 0; }
    60% { stroke-dashoffset: 0; opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }

  @keyframes successCircle {
    0% { stroke-dashoffset: 480; opacity: 0; }
    60% { stroke-dashoffset: 0; opacity: 0.5; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }

  @keyframes errorCross {
    0% { stroke-dashoffset: 124; opacity: 0; }
    60% { stroke-dashoffset: 0; opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }

  @keyframes errorCircle {
    0% { stroke-dashoffset: 480; opacity: 0; }
    60% { stroke-dashoffset: 0; opacity: 0.5; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }

  @keyframes infoAppear {
    0% { transform: translateY(50%) scale(0.8); opacity: 0; }
    60% { transform: translateY(-10%) scale(1.1); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 1; }
  }

  .icon-success circle {
    stroke-dasharray: 480;
    stroke-dashoffset: 480;
    animation: successCircle 0.8s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  .icon-success path {
    stroke-dasharray: 124;
    stroke-dashoffset: 124;
    animation: successCheck 0.8s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards;
  }

  .icon-error circle {
    stroke-dasharray: 480;
    stroke-dashoffset: 480;
    animation: errorCircle 0.8s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  .icon-error path {
    stroke-dasharray: 124;
    stroke-dashoffset: 124;
    animation: errorCross 0.8s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards;
  }

  .icon-info {
    animation: infoAppear 0.6s cubic-bezier(0.26, 0.53, 0.74, 1.48) forwards;
  }

  .icon-warning {
    animation: infoAppear 0.6s cubic-bezier(0.26, 0.53, 0.74, 1.48) forwards;
  }

  .icon-default {
    animation: infoAppear 0.6s cubic-bezier(0.26, 0.53, 0.74, 1.48) forwards;
  }
`;

// Inject the styles
const injectIconStyle = () => {
  if (!document.getElementById("flash-toast-icon-style")) {
    const styleElement = document.createElement("style");
    styleElement.id = "flash-toast-icon-style";
    styleElement.textContent = iconStyle;
    document.head.appendChild(styleElement);
  }
};

injectIconStyle();

export const Icons = {
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
      className="icon-success"
      width="24"
      height="24"
    >
      <circle cx="26" cy="26" r="23" />
      <path d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
      className="icon-error"
      width="24"
      height="24"
    >
      <circle cx="26" cy="26" r="23" />
      <path d="M17 17l18 18M35 17L17 35" />
    </svg>
  ),
  info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
      className="icon-info"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
  warning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
      className="icon-warning"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M1 21h22L12 2 1 21zM12 16v-4h-2v4h2zm0 4v-2h-2v2h2z" />
    </svg>
  ),
  default: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
      className="icon-default"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2v-6zm0 8h-2v2h2v-2z" />
    </svg>
  ),
};
