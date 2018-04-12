import {assert} from "chai";
import getTimer from "./getTimer.js";

describe(`Timer:`, () => {

  it(`Timer should be a number`, () => {
    assert.throws(() => getTimer(``));
  });

  it(`Timer should be positive`, () => {
    assert.throws(() => getTimer(`-6`));
  });
});
