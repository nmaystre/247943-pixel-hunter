import {getElementFromTemplate} from "../data/getElement";
import {appPageShow} from "../data/appPageShow";
import statistics from "./statistics";
import intro from "./intro";
import {gameData} from "../data/data";
import {gameTemplate} from "../components/game";

const template = getElementFromTemplate(`<div id="game-3"></div>`);

export default () => {
  const currentPage = template.cloneNode(true);
  currentPage.appendChild(getElementFromTemplate(gameTemplate(gameData[2])));

  currentPage.querySelector(`.game__content`).addEventListener(`click`, (event) => {
    const gameAnswer = currentPage.querySelectorAll(`.game__option`);

    for (let i = 0; i < gameAnswer.length; i++) {
      if (gameAnswer[i] === event.target) {
        appPageShow(statistics());
      }
    }
  });
  currentPage.querySelector(`.back`).addEventListener(`click`, () => {
    appPageShow(intro());
  });
  return currentPage;
};
