import { app, BrowserWindow, dialog, Menu } from "electron"
import path from "path"
// const electronReload = require('electron-reload')(__dirname, {
//     electron: path.join(__dirname, "..", 'node_modules', '.bin', 'electron.cmd'),
//     // hardResetMethod: 'exit'
// });

const mainMenuTemplate = [{ label: 'File', submenu: [{ label: 'Esci', accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q', click() { app.quit(); } }] }];

console.log(__dirname)
console.log("ciao 23!")

// if (process.env.NODE_ENV !== 'production') { mainMenuTemplate.push({ label: 'Developer Tools', submenu: [{ label: 'Toggle DevTools', accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I', click(item, focusedWindow) { focusedWindow.toggleDevTools(); } }] }) }

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            // preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('views/index.html')

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
}

app.whenReady().then(() => {
    createWindow()


})