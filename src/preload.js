window.addEventListener('DOMContentLoaded', () => {
    var cells = 50000;
    var grid = document.getElementById('grid');

    for(var i = 0; i <= cells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
});