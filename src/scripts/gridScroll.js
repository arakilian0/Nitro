function gridScroll (elmnt) {
    elmnt.addEventListener("wheel", function(e){ 
        if (!e.shiftKey) return;

        const delta = Math.sign(e.deltaY);

        if (delta === -1) {
            // Scroll up
            console.log('scrolling up');
        } else if (delta === 1) {
            // Scroll down
            console.log('scrolling down')
        }

    }, false);
}