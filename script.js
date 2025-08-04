function onCellHover(event) {
    const target = event.target;
    target.classList.add("hovered");
}

function onResize() {
    const newSize = Math.min(+prompt("Insert desired grid size"), 100);
    console.log(newSize);

    removeGrid();
    initGrid(newSize);
}

function initGrid(gridSize) {
    const container = document.querySelector(".container");

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        i
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", onCellHover);
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

function removeGrid() {
    const container = document.querySelector(".container");
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => container.removeChild(row));
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#resize").addEventListener("click", onResize);
    initGrid(16);
})