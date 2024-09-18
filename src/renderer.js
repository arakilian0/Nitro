window.addEventListener('DOMContentLoaded', () => {
    var grid = document.getElementById('grid');
    var panel = document.getElementById('panel');
    var panelResizerDiv = document.getElementById('panel-resizer');

    panelResizer(panelResizerDiv, panel);

    gridCells(grid, 300000);
    gridZoom(grid);
    gridDrag(grid);

    async function test1 () {
        const filePath = await window.nitro.getStore();
        console.log(filePath);
    };
    
    window.nitro.setStore('project', '123');
    window.nitro.setStore('zoom', '123');

    test1();
});
