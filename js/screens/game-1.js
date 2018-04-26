import {getElementFromTemplate} from "../data/getElement";
import {appPageShow} from "../data/appPageShow";
import game2 from "./game-2";
import intro from "./intro";
import {headerData, gameData} from "../data/data";
import {footerTemplate} from "../components/__footer";
import {headerTemplate} from "../components/__header";
import {gameTemplate} from "../components/__game";

const template = getElementFromTemplate(`<div id="game-1"></div>`);

export default () => {
  const currentPage = template.cloneNode(true);
  currentPage.insertBefore(getElementFromTemplate(headerTemplate(headerData)), currentPage.firstChild);
  currentPage.appendChild(getElementFromTemplate(gameTemplate(gameData[0])));
  currentPage.appendChild(getElementFromTemplate(footerTemplate()));

  currentPage.querySelector(`.game__content`).addEventListener(`click`, () => {
    const gameQuestion = currentPage.querySelectorAll(`.game__option`);
    let isAllAnswered = true;
    for (let i = 0; i < gameQuestion.length; i++) {
      const gameSelect = gameQuestion[i].querySelectorAll(`label input:checked`);
      const isAnswered = gameSelect.length;

      if (!isAnswered) {
        isAllAnswered = false;
        break;
      }
    }
    if (isAllAnswered) {
      appPageShow(game2());
    }
  }
  );
  currentPage.querySelector(`.back`).addEventListener(`click`, () => {
    appPageShow(intro());
  });
  return currentPage;
};
