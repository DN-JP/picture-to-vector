// Constants

const dropArea = document.querySelector('.hero__partner__input');
const dropboxElem = document.querySelector('.hero__partner__input-dropbox');
const inputFile = document.querySelector('#input-image');

export const inputListener = () => {
  inputFile.addEventListener('change', uploadImage);
}

export const uploadImage = () => {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  dropArea.style.backgroundImage = `url(${imgLink})`;
  dropboxElem.textContent = "";
}