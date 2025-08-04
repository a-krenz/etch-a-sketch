const GRID_SIZE = 16;

function onCellHover(event) {
    const target = event.target;
    target.classList.add("hovered");
}

function initGrid() {
    const container = document.querySelector(".container");

    for (let i = 0; i < GRID_SIZE; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        i
        for (let j = 0; j < GRID_SIZE; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", onCellHover);
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}