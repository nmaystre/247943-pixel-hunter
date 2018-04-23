import {getElementFromTemplate} from "../data/getElement";
import {appPageShow} from "../data/appPageShow";
import game2 from "./game-2";
import intro from "./intro";
import {headerTemplate} from "./__header";
import {headerData} from "./data/data";

const gameTemplate = getElementFromTemplate(`
<div id="game-1">
  <div class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
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
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    </div>
</div>`);

const container = document.querySelector(`#game-1`);
container.appendChild(getElementFromTemplate(headerTemplate(headerData)));


export default () => {
  const currentPage = gameTemplate.cloneNode(true);
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
  });
  currentPage.querySelector(`.back`).addEventListener(`click`, () => {
    appPageShow(intro());
  });
  return currentPage;
};
