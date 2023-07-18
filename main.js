const path = require('path');
const { app, BrowserWindow } = require('electron');

function createNewWindow(opt = {}) {
  opt = {
    file: 'index',

    width: 500,
    height: 500,
    ...opt,
  };

  const w = new BrowserWindow({
    ...opt,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
    },
  });

  w.loadFile(`renderer/${opt.file}.html`);
}

app
  .whenReady()
  .then(() => {
    createNewWindow();

    app
      .on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createNewWindow();
        }
      });
  })
  
app
  .on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  });
