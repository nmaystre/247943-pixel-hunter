import {getElementFromTemplate, mainContainer} from "../data/getElement";
import {appPageShow} from "../data/appPageShow";
import game2 from "./game-2";
import intro from "./intro";
import {gameData} from "../data/data";
import {getFooter} from "../components/footer";
import {getHeader} from "../components/header";
import {gameTemplate} from "../components/game";

const template = getElementFromTemplate(`<div id="game-1"></div>`);

getHeader(mainContainer);
getFooter(mainContainer);

export default () => {

  const currentPage = template.cloneNode(true);
  currentPage.appendChild(getElementFromTemplate(gameTemplate(gameData[0])));
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
  document.querySelector(`.back`).addEventListener(`click`, () => {
    appPageShow(intro());
  });
  return currentPage;
};
