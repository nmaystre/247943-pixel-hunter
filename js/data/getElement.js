export const mainContainer = document.querySelector(`#main`);

export const getElementFromTemplate = (htmlTemplate) => {
  const container = document.createElement(`div`);
  container.innerHTML = htmlTemplate;
  return container.firstChild;
};

