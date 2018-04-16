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
      if (this.time > 0) {
        this.time -= 1;
      }
      return {
        finished: (this.time === 0),
        time: this.time
      };
    }
  };
  return timer;
};