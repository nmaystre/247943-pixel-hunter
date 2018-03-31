const NEXT_KEYCODE = 39;
const PREV_KEYCODE = 37;

import {getElementFromTemplate} from "./getElement";
import {moduleGreetingElement} from "./greeting";


const moduleIntroElement = getElementFromTemplate(`<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  <footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>
  </footer>`);

const allElements = [moduleIntroElement, moduleGreetingElement];

const appPageShow = (i) => {
  const appPage = allElements[i].content;
  // const appPage = appPageTemplate.cloneNode(true);
  const appContainer = document.querySelector(`.central`);
  appContainer.innerHTML = ``;
  appContainer.appendChild(appPage);
};

let currentPage = 0;

const showNextPage = () => {
  if (currentPage < allElements.length - 1) {
    currentPage = currentPage + 1;
    appPageShow(currentPage);
  }
};

const showPrevPage = () => {
  if (currentPage > 0) {
    currentPage = currentPage - 1;
    appPageShow(currentPage);
  }
};

document.addEventListener(`keydown`, (e) => {
  if (e.keyCode === NEXT_KEYCODE && e.altKey) {
    showNextPage();
  } else if (e.keyCode === PREV_KEYCODE && e.altKey) {
    showPrevPage();
  }
});

appPageShow(currentPage);

