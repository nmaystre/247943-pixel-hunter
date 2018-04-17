export const appPageShow = (currentPage) => {
  const appContainer = document.querySelector(`.central`);
  appContainer.innerHTML = ``;
  appContainer.appendChild(currentPage);
};
