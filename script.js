const GRID_SIZE = 16;
const container = document.querySelector(".container");

for (let i = 0; i < GRID_SIZE; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < GRID_SIZE; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }

    container.appendChild(row);
}