const btn = document.querySelector("button");
const items = document.querySelectorAll("li");
let fontSize = 10;

btn.addEventListener("click", () => {
    console.log("działa");
    fontSize++;
    for (let i = 0; i < items.length; i++) {
        if (!items[i].style.display) {
            items[i].style.display = "block";
        }
        items[i].style.fontSize = `${fontSize}px`;
    }
})