const container = document.getElementById("container");

let size = prompt("Choose a grid size from 1 to 100");
createGrid(size);

function createGrid(size){
    for(let i = 0; i < size * size; i++){
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = (960 / size) + "px";
        div.style.height = (960 / size) + "px";
        container.appendChild(div);
    }
}

const boxes = document.querySelectorAll(".grid-item");

boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    });
});