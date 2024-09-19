const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('nitro', {
  getStore: () => ipcRenderer.invoke('dialog:getStore'),
  setStore: (k, v) => ipcRenderer.send('dialog:setStore', k, v)
});