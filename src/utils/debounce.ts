/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
function debounce(fn: any, ms: any) {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  let timer: any;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(timer, fn, ms);
    }, ms);
  };
}

export default debounce;
