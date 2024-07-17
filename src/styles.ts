// export const style = `
// @keyframes flashToastEnter {
//   from { transform: translateX(100%); opacity: 0; }
//   to { transform: translateX(0); opacity: 1; }
// }

// @keyframes flashToastExit {
//   from { transform: translateX(0); opacity: 1; }
//   to { transform: translateX(100%); opacity: 0; }
// }

// .flash-toast-container {
//   position: fixed;
//   top: 16px;
//   right: 16px;
//   z-index: 9999;
// }
// .flash-toast {
//   margin-bottom: 8px;
//   padding: 12px 20px;
//   border-radius: 4px;
//   color: white;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   display: flex;
//   align-items: center;
//   animation: flashToastEnter 0.3s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;
//   max-width: 350px;
// }
// .flash-toast-exit {
//   animation: flashToastExit 0.3s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;
// }
// .flash-toast-success { background-color: #4caf50; }
// .flash-toast-error { background-color: #f44336; }
// .flash-toast-info { background-color: #2196f3; }
// .flash-toast-icon {
//   margin-right: 12px;
//   flex-shrink: 0;
// }
// .flash-toast span {
//   flex-grow: 1;
//   word-break: break-word;
// }
// .flash-toast button {
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
//   font-size: 16px;
//   margin-left: 10px;
//   padding: 0;
//   line-height: 1;
//   opacity: 0.5;
//   transition: opacity 0.3s ease;
// }
// .flash-toast button:hover {
//   opacity: 1;
// }
// `;

// export const injectStyle = () => {
//   if (!document.getElementById("flash-toast-style")) {
//     const styleElement = document.createElement("style");
//     styleElement.id = "flash-toast-style";
//     styleElement.textContent = style;
//     document.head.appendChild(styleElement);
//   }
// };

// injectStyle();
