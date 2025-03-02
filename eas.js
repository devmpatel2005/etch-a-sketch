const container = document.getElementById("container");

createGrid(16);

function createGrid(size){
    container.innerHTML = '';
    for(let i = 0; i < size * size; i++){
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = (960 / size) + "px";
        div.style.height = (960 / size) + "px";
        container.appendChild(div);

        const boxes = document.querySelectorAll(".grid-item");
        boxes.forEach((box) => {
            box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
            });
        });
    }
}
const changeSize = document.createElement("button");
changeSize.textContent = "Change Size";
document.body.appendChild(changeSize);

changeSize.addEventListener("click", () => {
    let size = prompt("Choose a grid size from 1 to 100");
    if(size > 100 || size < 1){
        alert("Size must be greater than 1 and less than 101!");
    }
    else{
        createGrid(size);
    }
});





