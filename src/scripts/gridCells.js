function gridCells (elmnt, cellCount = 6000) {
    for(var i = 0; i <= cellCount; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('id', i);
        cell.classList.add('cell');
        elmnt.appendChild(cell);
    }
}