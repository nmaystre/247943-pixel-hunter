export const getElementFromTemplate = (htmlTemplate) => {
  const htmlContent = document.createElement(`div`);
  htmlContent.innerHTML = htmlTemplate;
  return htmlContent.firstChild;
};
