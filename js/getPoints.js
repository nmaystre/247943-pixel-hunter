const FAST_ANSWER = 10;
const SLOW_ANSWER = 20;
const CORRECT_ANSWER_BONUS = 100;
const FAST_ANSWER_BONUS = 50;
const SLOW_ANSWER_FINE = 50;
const LIFE_BONUS = 50;

export const getAnswerPoints = (answer) => {

  let result = 0;
  if (!answer.correct) {
    return result;
  }
  switch (true) {
    case (answer.time <= FAST_ANSWER):
      result = (CORRECT_ANSWER_BONUS + FAST_ANSWER_BONUS);
      break;
    case (answer.time > SLOW_ANSWER):
      result = (CORRECT_ANSWER_BONUS - SLOW_ANSWER_FINE);
      break;
    default:
      result = CORRECT_ANSWER_BONUS;
      break;
  }
  return result;
};

export const getAllGamePoints = (answerArray, lifeLeftCount) => {
  let sumPoints = 0;
  for (let i = 0; i < answerArray.length; i++) {
    sumPoints += getAnswerPoints(answerArray[i]);
  }
  sumPoints += LIFE_BONUS * lifeLeftCount;
  if (answerArray.length < 10) {
    sumPoints = -1;
  }
  return sumPoints;
};
