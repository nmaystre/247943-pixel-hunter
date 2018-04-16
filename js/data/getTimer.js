export const getTimer = (seconds) => {
  if (typeof seconds !== `number`) {
    throw new Error(`seconds should be a number`);
  }
  if (seconds < 0) {
    throw new Error(`seconds should not be negative value`);
  }

  let timer = {
    time: seconds,
    tick() {
      this.time -= 1;
      if (this.time <= 0) {
        return {
          finished: true,
          time: 0
        };
      }
      return {
        finished: false,
        time: this.time
      };
    }
  };
  return timer;
};

const timer1 = getTimer(3);
timer1.tick();
