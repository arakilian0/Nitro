window.addEventListener('DOMContentLoaded', () => {
    var wrapper = document.getElementById('wrapper');
    var grid = document.getElementById('grid');
    var panel = document.getElementById('panel');
    var panelResizerDiv = document.getElementById('panel-resizer');

    wrapper.style.display = 'block';
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
