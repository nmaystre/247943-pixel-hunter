
export let allElements = [];


export const setPages = (pages) => {
  allElements = pages;
};

export const appPageShow = (i) => {
  const appPage = allElements[i];
  const appContainer = document.querySelector(`.central`);
  appContainer.innerHTML = ``;
  appContainer.appendChild(appPage);
};

let currentPage = 0;

export const showNextPage = () => {
  if (currentPage < allElements.length - 1) {
    currentPage = currentPage + 1;
    appPageShow(currentPage);
  }
};

export const showPrevPage = () => {
  if (currentPage > 0) {
    currentPage = currentPage - 1;
    appPageShow(currentPage);
  }
};
