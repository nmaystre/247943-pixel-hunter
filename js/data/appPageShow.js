export const appPageShow = (currentPage) => {
  const appContainer = document.querySelector(`#main`);
  appContainer.innerHTML = ``;
  appContainer.appendChild(currentPage);
};
