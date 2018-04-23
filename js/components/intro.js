import {getElementFromTemplate} from "../data/getElement";
import {appPageShow} from "../data/appPageShow.js";
import greeting from './greeting.js';

const template = getElementFromTemplate(`
<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
</div>`);

export default () => {
  const currentPage = template.cloneNode(true);
  currentPage.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    appPageShow(greeting());
  });
  return currentPage;
};


