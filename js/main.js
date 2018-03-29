const NEXT_KEYCODE = 39;
const PREV_KEYCODE = 37;

const allElements = Array.from(document.getElementsByTagName(`template`));

const appPageShow = (i) => {
  const appPageTemplate = allElements[i].content;
  const appPage = appPageTemplate.cloneNode(true);
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

