// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

const draggableTarget = document.getElementById('target')

function dragover_handler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "copy"; // copy, move, link
}

function drop_handler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  const element = document.getElementById(data).cloneNode(true)
  
  element.id = ''
  element.draggable = false

  // ev.target.appendChild(element); // target could be draggableTarget or other element inside
  draggableTarget.appendChild(element)
}

function dragstart_handler(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.id);
}

draggableTarget.addEventListener('drop', drop_handler)
draggableTarget.addEventListener('dragover', dragover_handler)


// Get the element by id
const elements = document.querySelectorAll(".draggable");
// Add the ondragstart event listener
elements.forEach(e => e.addEventListener("dragstart", dragstart_handler));
