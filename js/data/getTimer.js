export const getTimer = (seconds) => {
  if (typeof seconds !== `number`) {
    throw new Error(`seconds should be a number`);
  }
  if (seconds < 0) {
    throw new Error(`seconds should not be negative value`);
  }
  let timer = {
    finished: false,
    time: seconds,
    tick: () => {
      seconds -= 1;
      return seconds;
    }
  };
  if (timer.time === 0) {
    timer.finished = true;
    return timer;
  }
  return timer;
};
