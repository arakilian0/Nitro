window.addEventListener('DOMContentLoaded', () => {
    var wrapper = document.getElementById('wrapper');
    var buffer = document.getElementById('buffer-wrapper');
    var grid = document.getElementById('grid');
    var panel = document.getElementById('panel');
    var panelResizerDiv = document.getElementById('panel-resizer');

    setTimeout(() => {
        wrapper.style.display = 'block';
        buffer.remove();
    }, "3000");

    panelResizer(panelResizerDiv, panel);

    gridCells(grid, 300000);
    gridZoom(grid);
    gridDrag(grid);

    async function test1 () {
        const filePath = await window.nitro.getStore();
        console.log(filePath);
    };
    
    window.nitro.setStore('project', '123');

    test1();
});
