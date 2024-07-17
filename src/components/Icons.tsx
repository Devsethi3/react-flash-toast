import React from "react";

const iconStyle = `
  @keyframes successCheckmark {
    0% { stroke-dashoffset: 66; transform: scale(0.8); opacity: 0; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { stroke-dashoffset: 0; transform: scale(1); opacity: 1; }
  }

  @keyframes errorCrossBounce {
    0%, 20% { transform: rotate(0deg) scale(0); }
    50% { transform: rotate(180deg) scale(1.2); }
    80% { transform: rotate(360deg) scale(0.9); }
    100% { transform: rotate(360deg) scale(1); }
  }

  @keyframes infoAppear {
    0% { transform: translateY(50%); opacity: 0; }
    50% { transform: translateY(-10%); opacity: 0.8; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .icon-success circle {
    opacity: 0;
    animation: fadeIn 0.3s ease-out 0.2s forwards;
  }

  .icon-success path {
    stroke-dasharray: 66;
    stroke-dashoffset: 66;
    animation: successCheckmark 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards;
  }

  .icon-error path:last-child {
    transform-origin: center;
    animation: errorCrossBounce 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
  }

  .icon-info {
    animation: infoAppear 0.5s cubic-bezier(0.26, 0.53, 0.74, 1.48) forwards;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
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
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
      className="icon-success"
    >
      <circle cx="26" cy="26" r="23" />
      <path d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      fill="currentColor"
      width="24"
      height="24"
      className="icon-error"
    >
      <circle cx="26" cy="26" r="25" fill="currentColor" opacity="0.2" />
      <path d="M35.6 16.4L26 26l9.6 9.6-2.4 2.4L24 28.4l-9.6 9.6-2.4-2.4L21.6 26 12 16.4l2.4-2.4L24 23.6l9.6-9.6z" />
    </svg>
  ),
  info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      fill="currentColor"
      width="24"
      height="24"
      className="icon-info"
    >
      <circle cx="26" cy="26" r="25" fill="currentColor" opacity="0.2" />
      <path d="M26 22a2 2 0 100 4 2 2 0 000-4zm0-4c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2z" />
    </svg>
  ),
};
