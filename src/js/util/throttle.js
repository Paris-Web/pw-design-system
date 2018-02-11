const throttle = (fn, delay) => {
  let lastExecution = null;
  return (...args) => {
    let now = window.performance.now();
    if (!lastExecution || lastExecution + delay < now) {
      lastExecution = now;
      fn(...args);
    }
  };
};

export default throttle;
