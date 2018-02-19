// In the main process.
const {
  app,
  BrowserWindow,
} = require('electron');

let win;
app.on('ready', () => {
  win = new BrowserWindow();
  
  // Load a local HTML file.
  win.loadURL(`file://${__dirname}/index.html`);
  
  // ready-to-show; should prevent slow load i.e. issue in Safari.
  win.once('ready-to-show', () => {
    win.show();
  });
  
  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q.
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

