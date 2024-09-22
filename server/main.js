const { app, BrowserWindow, ipcMain } = require('electron/main');
const path = require('node:path');

// IPC Modules
const getStore = require('./ipc/getStore.js');
const setStore = require('./ipc/setStore.js');

function createWindow () {
  const win = new BrowserWindow({
    width: getStore().windowWidth,
    height: getStore().windowHeight,
    webPreferences: {
      preload: path.resolve('server', 'preload.js')
    }
  });

  win.loadFile(path.resolve('src', 'index.html'));

  win.on('resize', function() {
    setStore(null, 'windowWidth', win.getSize()[0]);
    setStore(null, 'windowHeight', win.getSize()[1]);
  });
};

app.whenReady().then(() => {

  // IPC Handles
  ipcMain.handle('dialog:getStore', getStore);
  ipcMain.on('dialog:setStore', setStore);

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});