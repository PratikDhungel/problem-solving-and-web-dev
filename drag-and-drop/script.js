const movingElement = document.querySelector('.moving-element');
const dropBoxElement = document.querySelector('.drop-box-element');

let selected = false;
let intersected = false;

movingElement.addEventListener('click', (e) => {
  selected = !selected;
  e.target.classList.toggle('floated');
});

const mouseHoverListener = (e) => {
  const elementPosition = movingElement.getBoundingClientRect();
  const elementX = elementPosition.x;
  const elementY = elementPosition.y;
  const elementHeight = elementPosition.height;
  const elementWidth = elementPosition.width;

  const elementRightPosition = elementX + elementWidth;
  const elementBottomPosition = elementY + elementHeight;

  const mouseX = e.x;
  const mouseY = e.y;

  if (selected) {
    let leftPositionMovement = mouseX - elementRightPosition;
    let newLeftPosition = elementX + leftPositionMovement;
    movingElement.style['left'] = `${newLeftPosition}px`;

    let topPositionMovement = mouseY - elementBottomPosition;
    let newTopPosition = elementY + topPositionMovement;
    movingElement.style['top'] = `${newTopPosition}px`;
  }

  const dropBoxPosition = dropBoxElement.getBoundingClientRect();
  const dropBoxX = dropBoxPosition.x;
  const dropBoxY = dropBoxPosition.y;
  const dropBoxWidth = dropBoxPosition.width;
  const dropBoxHeight = dropBoxPosition.height;

  const elementsIntersectX = dropBoxX <= elementRightPosition && dropBoxX + dropBoxWidth >= elementX;
  const elementsIntersectY = dropBoxY <= elementBottomPosition && dropBoxY + dropBoxHeight >= elementY;

  if (elementsIntersectX && elementsIntersectY) {
    intersected = true;
    document.removeEventListener('mousemove', mouseHoverListener);
    let newLeftPosition = dropBoxX + dropBoxWidth / 2 - elementWidth / 2;
    let newTopPosition = dropBoxY + dropBoxHeight / 2 - elementHeight / 2;

    // Remove 50px for the container padding
    movingElement.style['left'] = `${newLeftPosition - 50}px`;
    movingElement.style['top'] = `${newTopPosition - 50}px`;
  }
};

document.addEventListener('mousemove', mouseHoverListener);
