import {getElementFromTemplate} from "../data/getElement";
import {appPageShow} from "../data/appPageShow";
import statistics from "./statistics";
import intro from "./intro";

const template = getElementFromTemplate(`
<div id="game-3">
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>
</div>`);

export default () => {
  const currentPage = template.cloneNode(true);
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
