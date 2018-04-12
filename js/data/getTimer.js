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
      if (seconds === 0) {
        return seconds;
      }
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

const timer1 = getTimer(3);
timer1.tick();
