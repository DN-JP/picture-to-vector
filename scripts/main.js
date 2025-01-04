
// Constants

const dropArea = document.querySelector('.hero__partner__input-dropbox');
const dropboxElem = document.querySelector('.hero__partner__input-dropbox');
const dropboxIcon = document.querySelector('.hero__partner__input-dropbox-icon');
const inputFile = document.querySelector('#input-image');

const uploadImage = () => {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  dropArea.style.backgroundImage = `url(${imgLink})`;
  dropboxElem.textContent = "";
}

inputFile.addEventListener('change', uploadImage);