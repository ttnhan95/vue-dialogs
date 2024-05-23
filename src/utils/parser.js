export const typeToBgClass = (type) => {
  let bgClass;
  switch (type) {
    case "success":
      bgClass = "bg-emerald-400";
      break;
    case "info":
      bgClass = "bg-sky-400";
      break;
    case "warning":
      bgClass = "bg-amber-400";
      break;
    case "error":
      bgClass = "bg-rose-400";
      break;
    default:
      bgClass = "bg-gray-200 text-black dark:bg-gray-600 dark:text-gray-100";
  }
  return bgClass;
};

export const typeToIcon = (type) => {
  let icon;
  switch (type) {
    case "success":
      icon =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>';
      break;
    case "info":
      icon =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>';
      break;
    case "warning":
      icon =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>';
      break;
    case "error":
      icon =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>';
      break;
    default:
      icon =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>';
  }
  return icon;
};

export const positionToClass = (position) => {
  let pstClass;
  switch (position) {
    case "top-left":
      pstClass = "top-0 left-0 flex flex-col";
      break;
    case "top-right":
      pstClass = "top-0 right-0 flex flex-col";
      break;
    case "bottom-left":
      pstClass = "bottom-0 left-0 flex flex-col-reverse";
      break;
    case "bottom-right":
      pstClass = "bottom-0 right-0 flex flex-col-reverse";
      break;
    default:
      pstClass = "top-0 left-0 flex flex-col";
  }
  return pstClass;
};

export const postionToTransition = (position) => {
  let transitionProp = {};
  switch (position) {
    case "top-left":
      transitionProp.enterFrom = "opacity-0 -translate-x-full";
      transitionProp.enterTo = "opacity-100 translate-x-0";
      transitionProp.leaveFrom = "opacity-100";
      transitionProp.leaveTo = "opacity-0";
      break;
    case "top-right":
      transitionProp.enterFrom = "opacity-0 translate-x-full";
      transitionProp.enterTo = "opacity-100 translate-x-0";
      transitionProp.leaveFrom = "opacity-100";
      transitionProp.leaveTo = "opacity-0";
      break;
    case "bottom-left":
      transitionProp.enterFrom = "opacity-0 -translate-x-full";
      transitionProp.enterTo = "opacity-100 translate-x-0";
      transitionProp.leaveFrom = "opacity-100";
      transitionProp.leaveTo = "opacity-0";
      break;
    case "bottom-right":
      transitionProp.enterFrom = "opacity-0 translate-x-full";
      transitionProp.enterTo = "opacity-100 translate-x-0";
      transitionProp.leaveFrom = "opacity-100";
      transitionProp.leaveTo = "opacity-0";
      break;
    default:
      transitionProp.enterFrom = "opacity-0 -translate-x-full";
      transitionProp.enterTo = "opacity-100 translate-x-0";
      transitionProp.leaveFrom = "opacity-100";
      transitionProp.leaveTo = "opacity-0";
  }

  return transitionProp;
};
