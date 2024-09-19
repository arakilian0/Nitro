async function panelResizer (resizer, panel) {
    const store = await window.nitro.getStore();
    panel.style.width = store.panelWidth + 'px';

    resizer.addEventListener('mousedown', initDrag, false);
    
    var startX, startWidth;
    
    function initDrag(e) {
       startX = e.clientX;

       startWidth = parseInt(document.defaultView.getComputedStyle(panel).width, 10);

       document.documentElement.addEventListener('mousemove', doDrag, false);
       document.documentElement.addEventListener('mouseup', stopDrag, false);
    }
    
    function doDrag(e) {
        panel.style.width = (startWidth + e.clientX - startX) + 'px';
    }
    
    function stopDrag(e) {
        window.nitro.setStore('panelWidth', (startWidth + e.clientX - startX));
        document.documentElement.removeEventListener('mousemove', doDrag, false);
        document.documentElement.removeEventListener('mouseup', stopDrag, false);
    }
}