// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

const draggableTarget = document.getElementById('target')

function dragover_handler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "copy"; // copy, move, link
}

function drop_handler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain"); // getData can only be called on drop
  const element = document.getElementById(data).cloneNode(true)
  
  element.id = ''
  element.draggable = false

  // ev.target.appendChild(element); // target could be draggableTarget or other element inside
  draggableTarget.appendChild(element)
}

const img = new Image();
img.src = "pikachu.png";

function dragstart_handler(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.id);

  ev.dataTransfer.setDragImage(img, 75, 50);
}

draggableTarget.addEventListener('drop', drop_handler)
draggableTarget.addEventListener('dragover', dragover_handler)


// Get the element by id
const elements = document.querySelectorAll(".draggable");
// Add the ondragstart event listener
elements.forEach(e => e.addEventListener("dragstart", dragstart_handler));