import {assert} from "chai";
import {getAnswerPoints, getAllGamePoints} from "./getPoints";

describe(`Points achievements:`, () => {

  it(`User answers question correctly and moderate`, () => {
    let answer = {time: 15, correct: true};
    assert.equal(getAnswerPoints(answer), 100);
  });

  it(`User answers question correctly and slow`, () => {
    let answer = {time: 25, correct: true};
    assert.equal(getAnswerPoints(answer), 50);
  });

  it(`User answers question correctly and fast`, () => {
    let answer = {time: 5, correct: true};
    assert.equal(getAnswerPoints(answer), 150);
  });


  it(`User answers question incorrectly`, () => {
    let answer = {time: 5, correct: false};
    assert.equal(getAnswerPoints(answer), 0);
  });

  it(`User answers not all questions`, () => {
    let answerArray = [{time: 5, correct: false}, {time: 5, correct: false}];
    assert.equal(getAllGamePoints(answerArray, 0), -1);
  });

  it(`User answers 10 questions correctly`, () => {
    let answerArray = [{time: 15, correct: true}, {time: 15, correct: true}, {time: 15, correct: true}, {time: 15, correct: true}, {time: 15, correct: true}, {time: 15, correct: true}, {time: 15, correct: true}, {time: 15, correct: true}, {time: 15, correct: true}, {time: 15, correct: true}];
    assert.equal(getAllGamePoints(answerArray, 3), 1150);
  });

});
