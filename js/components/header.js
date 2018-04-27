import {getElementFromTemplate} from "../data/getElement";
import {headerData} from "../data/data";

export const headerTemplate = (headerState) => `<header class="header">
<div class="header__back">
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
</div>
<h1 class="game__timer">${headerState.timer}</h1>
<div class="game__lives">
   ${new Array(3 - headerState.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
   ${new Array(headerState.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
  </div>
</header>`;

export const getHeader = (container) => {
  container.insertAdjacentElement(`beforebegin`, getElementFromTemplate(headerTemplate(headerData)));
};
