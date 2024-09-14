window.addEventListener('DOMContentLoaded', () => {
    var grid = document.getElementById('grid');
    var panel = document.getElementById('panel');
    var panelResizerDiv = document.getElementById('panel-resizer');

    gridCells(grid);
    gridDrag(grid);
    panelResizer(panelResizerDiv, panel);
});
