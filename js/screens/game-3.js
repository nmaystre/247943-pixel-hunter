import {getElementFromTemplate} from "../data/getElement";
import {appPageShow} from "../data/appPageShow";
import statistics from "./statistics";
import intro from "./intro";
import {gameData, headerData} from "../data/data";
import {footerTemplate} from "../components/__footer";
import {headerTemplate} from "../components/__header";
import {gameTemplate} from "../components/__game";

const template = getElementFromTemplate(`<div id="game-3"></div>`);

export default () => {
  const currentPage = template.cloneNode(true);
  currentPage.insertBefore(getElementFromTemplate(headerTemplate(headerData)), currentPage.firstChild);
  currentPage.appendChild(getElementFromTemplate(gameTemplate(gameData[2])));
  currentPage.appendChild(getElementFromTemplate(footerTemplate()));

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
