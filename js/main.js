const allElements = Array.from(document.getElementsByTagName(`template`));

const allElementsId = allElements.map(function (element) {
  return element.id;
});

const appPageShow = function (i) {
  const appPageTemplate = document.querySelector(`#` + allElementsId[i]).content;
  const appPage = appPageTemplate.cloneNode(true);
  const appContainer = document.querySelector(`.central`);
  appContainer.innerHTML = ``;
  appContainer.appendChild(appPage);
};

let currentPage = 0;


function showNextPage() {
  if (currentPage < allElementsId.length - 1) {
    currentPage = currentPage + 1;
    appPageShow(currentPage);
  }
}

function showPrevPage() {
  if (currentPage > 0) {
    currentPage = currentPage - 1;
    appPageShow(currentPage);
  }
}

const NEXT_KEYCODE = 39;
const PREV_KEYCODE = 37;

document.addEventListener(`keydown`, function (e) {
  if (e.keyCode === NEXT_KEYCODE && e.altKey) {
    showNextPage();
  } else if (e.keyCode === PREV_KEYCODE && e.altKey) {
    showPrevPage();
  }
});

appPageShow(currentPage);

