window.addEventListener('DOMContentLoaded', () => {
    var grid = document.getElementById('grid');
    var panel = document.getElementById('panel');
    var panelResizerDiv = document.getElementById('panel-resizer');

    panelResizer(panelResizerDiv, panel);

    gridCells(grid, 300000);
    gridZoom(grid);
    gridDrag(grid);
});
