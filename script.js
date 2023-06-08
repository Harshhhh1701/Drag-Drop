const items = document.querySelectorAll('.item');
const containers = document.querySelectorAll('.container');
const resetButton = document.getElementById('resetButton');

items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

containers.forEach(container => {
  container.addEventListener('dragover', dragOver);
  container.addEventListener('dragenter', dragEnter);
  container.addEventListener('dragleave', dragLeave);
  container.addEventListener('drop', drop);
});

resetButton.addEventListener('click', resetContainers);

function dragStart() {
  this.classList.add('dragging');
  // Set custom drag image (optional)
  const dragImage = document.createElement('div');
  dragImage.className = 'drag-image';
  dragImage.innerText = this.innerText;
  document.body.appendChild(dragImage);
  event.dataTransfer.setDragImage(dragImage, 0, 0);
}

function dragEnd() {
  this.classList.remove('dragging');
  // Remove the custom drag image
  const dragImage = document.querySelector('.drag-image');
  document.body.removeChild(dragImage);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function drop() {
  this.classList.remove('hovered');
  const item = document.querySelector('.dragging');
  this.appendChild(item);
}

function resetContainers() {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');
  
  // Clear the second container
  container2.innerHTML = '<h3>Container 2</h3>';
  
  // Reset the first container to its original state
  container1.innerHTML = `
    <h3>Container 1</h3>
    <div class="item" draggable="true">Item 1</div>
    <div class="item" draggable="true">Item 2</div>
    <div class="item" draggable="true">Item 3</div>
  `;
  
  // Reattach event listeners to the items in the first container
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });
}
