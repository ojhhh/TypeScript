import React from "react";

function Throttle(func: Function, delay: number = 1000) {
  let timer: NodeJS.Timeout | null = null;

  return (...args: unknown[]) => {
    if (timer) {
      return;
    }
    func(...args);
    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
}

export default Throttle;
