import { app, BrowserWindow } from 'electron';

function createWindow() {
    const window = new BrowserWindow({
        width: 1200,
        height: 800,
        resizable: true,
        autoHideMenuBar: false
    });

    window.loadURL('http://localhost:3000')

    return window;
}

app.on('ready', () => {
    createWindow()
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});