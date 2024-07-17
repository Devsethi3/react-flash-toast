import React from "react";

export const Icons = {
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  ),
  info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
};

export const CloseIcon = () => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>;
};
