import {getElementFromTemplate} from "../data/getElement";
import {appPageShow} from "../data/appPageShow.js";
import greeting from './greeting';
// import game1 from './game-1';

const template = getElementFromTemplate(`<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>`);

export default () => {
  const currentPage = template.cloneNode(true);
  currentPage.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    appPageShow(greeting());
  });
  return currentPage;
};
