import {getElementFromTemplate} from "../data/getElement";
import {appPageShow} from "../data/appPageShow.js";
import game1 from "./game-1";
import intro from "./intro";
import {headerTemplate} from "../components/header";
import {headerData} from "../data/data";
import {footerTemplate} from "../components/footer";

const template = getElementFromTemplate(`<div id="rules">
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
</div>`);

export default () => {
  const currentPage = template.cloneNode(true);

  currentPage.querySelector(`.rules__input`).addEventListener(`input`, (e) => {
    if (e.target.value.length > 2) {
      currentPage.querySelector(`.continue`).disabled = false;
    } else {
      currentPage.querySelector(`.continue`).disabled = true;
    }
  });
  currentPage.querySelector(`.rules__form`).addEventListener(`submit`, (e) => {
    e.preventDefault();
    appPageShow(game1());
  });
  document.querySelector(`.back`).addEventListener(`click`, () => {
    appPageShow(intro());
  });
  return currentPage;
};


