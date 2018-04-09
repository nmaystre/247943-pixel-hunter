import {assert} from "chai";
import {getAnswerPoints, getAllGamePoints} from "./getPoints";
mocha.setup(`tdd`);

// const assert = chai.assert;

describe(`Points achievements:`, () => {

  // it(`Function should take numbers only`, () => {
  //   assert.isNumber(gameAnswer);
  // });

  // Правильный быстрый, 3 жизни
  // Правильный быстрый 2 жизни
  // Правильный быстрый 1 жизнь
  // Правильный медленный 3 жизни
  // Правильный медленный 2 жизни
  // Правильный медленный 1 жизнь
  // Неправильный ответ

  it(`User should answer 10 questions`, () => {

  });

  it(`User answers question correctly and fast`, () => {

  });

  it(`User answers question correctly and moderate`, () => {

  });

  it(`User answers question correctly and slow`, () => {

  });

  it(`User answers question incorrectly`, () => {

  });

});

mocha.run();


class math{
  function sum(a, b)
  functin div(a, b)
  function mod(a, b)
}


class mathTest{
  function sumTest() {
    var math = new Math();
    var actual = math.sum(1, 2);

    assert(3, actual, "wrong sum");
  }
}