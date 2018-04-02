//const NEXT_KEYCODE = 39;
//const PREV_KEYCODE = 37;

import {moduleGreetingElement} from "./greeting";
import {moduleRulesElement} from "./rules";
import {moduleGameFirstElement} from "./game-1";
import {moduleGameSecondElement} from "./game-2";
import {moduleGameThirdElement} from "./game-3";
import {moduleStatsElement} from "./stats";
import {setPages, appPageShow, showNextPage} from "./appPageShow.js";
import {getElementFromTemplate} from "./getElement";

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

moduleIntroElement.getElementsByClassName("intro__asterisk")[0].onclick = () => {
  showNextPage();
};

//console.log(allElements);

setPages([moduleIntroElement, moduleGreetingElement, moduleRulesElement, moduleGameFirstElement, moduleGameSecondElement, moduleGameThirdElement, moduleStatsElement]);


/*
document.addEventListener(`keydown`, (e) => {
  if (e.keyCode === NEXT_KEYCODE && e.altKey) {
    showNextPage();
  } else if (e.keyCode === PREV_KEYCODE && e.altKey) {
    showPrevPage();
  }
});
*/

appPageShow(0);

