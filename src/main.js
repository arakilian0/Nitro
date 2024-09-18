const { app, BrowserWindow, ipcMain } = require('electron/main');
const path = require('node:path');

// IPC Modules
const getStore = require('./ipc/getStore.js');
const setStore = require('./ipc/setStore.js');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
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