const fs = require('fs');

const { app, BrowserWindow } = require('electron');


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    const files = fs.readdirSync('/Users/emily/Library/Mobile\ Documents/com~apple~CloudDocs/Edits');
    console.log(files);
    win.loadFile('index.html');
}


app.whenReady().then(createWindow);
