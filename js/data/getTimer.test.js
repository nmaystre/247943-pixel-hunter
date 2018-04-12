import {assert} from "chai";
import {getTimer} from "./getTimer.js";

describe(`Timer:`, () => {

  it(`Timer should be a number`, () => {
    assert.throws(() => getTimer(`text`), /seconds should be a number/);
  });

  it(`Timer should be positive`, () => {
    assert.throws(() => getTimer(-6), /seconds should not be negative value/);
  });

  it(`Timer should change its' status after seconds === 0`, () => {
    assert.equal(getTimer(0).finished, true);
    assert.equal(getTimer(10).finished, false);
  });

  it(`Timer changes timer for 1 ser per move`, () => {
    const timer = getTimer(10);
    assert.equal(timer.tick(), 9);
    assert.equal(timer.tick(), 8);
  });

});
