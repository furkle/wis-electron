// In the main process.
const {BrowserWindow} = require('electron')

let win = new BrowserWindow({width: 800, height: 600, frame: false, resizable: false})
win.on('closed', () => {
  win = null
})

// Or load a local HTML file
win.loadURL(`file://${__dirname}/app/index.html`)

//ready-to-show; should prevent slow load i.e. issue in Safari
const {BrowserWindow} = require('electron')
let win = new BrowserWindow({show: false})
win.once('ready-to-show', () => {
  win.show()
})

 // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});