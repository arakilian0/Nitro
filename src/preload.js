window.addEventListener('DOMContentLoaded', () => {
    var cells = 60000;
    var grid = document.getElementById('grid');

    for(var i = 0; i <= cells; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('id', i);
        cell.classList.add('cell');
        grid.appendChild(cell);
    }

    let test1 = document.getElementById('3');
    let test2 = document.getElementById('4');

    test1.style.backgroundColor = 'red';
    test2.style.backgroundColor = 'red';
});