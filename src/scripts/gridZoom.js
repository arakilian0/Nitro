function gridZoom (elmnt) {

    async function setInitialZoom () {
        const store = await window.nitro.getStore();
        elmnt.style.zoom = store.zoom;
    };

    let zoom = 1;
    setInitialZoom ();

    elmnt.addEventListener("wheel", function(e){ 
        if (e.shiftKey) {
            const delta = Math.sign(e.deltaY);

            if (delta === -1) {
                // Scroll up
                if (zoom.toFixed(1) < 1.5) {
                    zoom = zoom + 0.5;
                    elmnt.style.zoom = zoom.toFixed(1);
                    window.nitro.setStore('zoom', zoom.toFixed(1));
                }
            } else if (delta === 1) {
                // Scroll down
                if (zoom.toFixed(1) > 0.5) {
                    zoom = zoom - 0.5;
                    elmnt.style.zoom = zoom.toFixed(1);
                    window.nitro.setStore('zoom', zoom.toFixed(1));
                }
            }
        }

    }, false);
}