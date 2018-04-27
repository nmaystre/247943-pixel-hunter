import {stats} from "./stats";

export const gameTemplate = (gameState) => {
  let gameType = taskTemplate(gameState);

  if (gameState.type === `tinder-like`) {
    gameType = (`${gameType}${gameOneImg(gameState)}`);
  } else if (gameState.type === `one-of-three`) {
    gameType = (`${gameType}${gameThreeImg(gameState)}`);
  } else {
    gameType = (`${gameType}${gameTwoImg(gameState)}`);
  }
  return `<div class="game">${gameType}${stats}</div>`;
};

export const taskTemplate = (gameState) =>
  `<p class="game__task">${gameState.question}</p>
`;

const gameTwoImg = (gameState) =>
  `<form class="game__content">
        <div class="game__option">
           <img src="${gameState.answers[0].image.url}" alt="Option 1" width="${gameState.answers[0].image.width}" height="${gameState.answers[0].image.height}">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
           <img src="${gameState.answers[1].image.url}" alt="Option 1" width="${gameState.answers[1].image.width}" height="${gameState.answers[1].image.height}">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;

const gameOneImg = (gameState) => `<div id="game-2">
    <form class="game__content  game__content--wide">
      <div class="game__option">
           <img src="${gameState.answers[0].image.url}" alt="Option 1" width="${gameState.answers[0].image.width}" height="${gameState.answers[0].image.height}">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;

const gameThreeImg = (gameState) =>
  `<form class="game__content  game__content--triple">
      <div class="game__option">
           <img src="${gameState.answers[0].image.url}" alt="Option 1" width="${gameState.answers[0].image.width}" height="${gameState.answers[0].image.height}">
      </div>
      <div class="game__option  game__option--selected">
           <img src="${gameState.answers[1].image.url}" alt="Option 1" width="${gameState.answers[1].image.width}" height="${gameState.answers[1].image.height}">
      </div>
      <div class="game__option">
           <img src="${gameState.answers[2].image.url}" alt="Option 1" width="${gameState.answers[2].image.width}" height="${gameState.answers[2].image.height}">
      </div>
    </form>`;

