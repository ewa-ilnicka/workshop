document.body.style.height = "10000px";

const div = document.createElement('div');
document.body.appendChild(div);

let size = 100;

div.style.position = "fixed";
div.style.top = 0;
div.style.left = 0;
div.style.width = "100%";
div.style.height = size + "px";
div.style.backgroundColor = "green";