export default class AddImage {
  constructor(blockImg, elementError) {
    this.blockImg = blockImg;
    this.elementError = elementError;
  }

  createImage(name, url) {
    const addImageElement = document.createElement('img');
    addImageElement.src = url;

    addImageElement.addEventListener('load', () => {
      this.elementError.classList.add('hidden');
      addImageElement.className = 'item-img';
      addImageElement.alt = name;

      const addDivImage = document.createElement('div');

      addDivImage.className = 'item-img-div';
      addDivImage.innerHTML = '<div class="close">✖</div>';
      addDivImage.appendChild(addImageElement);
      this.blockImg.appendChild(addDivImage);
    });

    addImageElement.addEventListener('error', () => {
      this.elementError.classList.remove('hidden');
    });
  }
}
