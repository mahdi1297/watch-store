export const debouncer = (func: any, wait: any, immediate?: any) => {
  let timeout: any;
  return (...args: any) => {
    let context = this;
    let funcArgs = args;

    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(this, funcArgs);
      }
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, funcArgs);
    }
  };
};
