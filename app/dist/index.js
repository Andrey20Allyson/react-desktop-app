"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
function createWindow() {
    const window = new electron_1.BrowserWindow({
        width: 1200,
        height: 800,
        resizable: true,
        autoHideMenuBar: false
    });
    window.loadURL('http://localhost:3000');
    return window;
}
electron_1.app.on('ready', () => {
    createWindow();
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
