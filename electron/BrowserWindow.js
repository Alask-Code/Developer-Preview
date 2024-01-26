const { resolve } = require('path');
const { BrowserWindow } = require('electron');
const icon = resolve(__dirname, '../', 'build', 'icon.png');

function createWindow () {
  const win = new BrowserWindow({
    icon,
    width: 210,
    height: 310,
    frame: false,
    resizable: false,
    skipTaskbar: true,
    alwaysOnTop: true,
    fullscreenable: false,
    title: 'Developer Preview',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });
  win.hide();
  win.removeMenu();
  win.loadFile('index.html');

  return win;
}

module.exports = createWindow();
