import warn from "./warn";

const check = (condition, ...messages) => {
  if (!condition) {
    warn(...messages);
  }

  return condition;
};

export default check;
