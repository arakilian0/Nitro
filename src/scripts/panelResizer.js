function panelResizer (resizer, panel) {
    resizer.addEventListener('mousedown', initDrag, false);
    
    var startX, startWidth;
    
    function initDrag(e) {
       startX = e.clientX;
    //    startY = e.clientY;
       startWidth = parseInt(document.defaultView.getComputedStyle(panel).width, 10);
    //    startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
       document.documentElement.addEventListener('mousemove', doDrag, false);
       document.documentElement.addEventListener('mouseup', stopDrag, false);
    }
    
    function doDrag(e) {
        panel.style.width = (startWidth + e.clientX - startX) + 'px';
    //    p.style.height = (startHeight + e.clientY - startY) + 'px';
    }
    
    function stopDrag(e) {
        document.documentElement.removeEventListener('mousemove', doDrag, false);
        document.documentElement.removeEventListener('mouseup', stopDrag, false);
    }
}