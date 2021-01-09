document.body.style.height = "10000px";

const div = document.createElement('div');
document.body.appendChild(div);

let size = 100;
let grow = true;

div.style.position = "fixed";
div.style.top = 0;
div.style.left = 0;
div.style.width = "100%";
div.style.height = size + "px";
div.style.backgroundColor = "green";

const changeHeight = function () {

    if (size > window.innerHeight / 2) {
        grow = false;
    } else if (size <= 0) {
        grow = true;
    }

    if (grow == true) {
        size += 10;
        div.style.backgroundColor = "red";
    } else {
        size -= 10;
        div.style.backgroundColor = "green";
    }
    div.style.height = size + "px";
}

window.addEventListener("scroll", changeHeight);