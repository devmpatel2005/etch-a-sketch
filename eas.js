const container = document.getElementById("container");

createGrid(16);

function createGrid(size){
    container.innerHTML = '';
    for(let i = 0; i < size * size; i++){
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = (640 / size) + "px";
        div.style.height = (640 / size) + "px";
        container.appendChild(div);

    }
    const boxes = document.querySelectorAll(".grid-item");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
        });
    });
}

const btns = document.createElement("div");

btns.classList.add("buttons");

const changeSize = document.createElement("button");
changeSize.textContent = "Change Size";

const clear = document.createElement("button");
clear.textContent = "Clear";

btns.appendChild(changeSize);
btns.appendChild(clear);


document.body.appendChild(btns)

changeSize.addEventListener("click", () => {
    let size = prompt("Choose a grid size from 1 to 100");
    if(size > 100 || size < 1){
        alert("Size must be greater than 1 and less than 101!");
    }
    else{
        createGrid(size);
    }
});


clear.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".grid-item");
    boxes.forEach((box) => {
        box.style.backgroundColor = "white";
    })
})