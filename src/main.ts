import { app, BrowserWindow, Notification, globalShortcut } from 'electron';
import * as log from 'electron-log';
import * as path from 'path';

export class ElectronProject {

    private win: BrowserWindow;

    constructor() {
        log.info('Starting...');
        this.win = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true
            }
        });

        const indexHTML = path.join(__dirname + '/index.html');
        this.win.loadFile(indexHTML).then(() => {

            // IMPLEMENT FANCY STUFF HERE

        }).catch(e => log.error(e));


    }

}


let project: ElectronProject;
app.on('ready', () => {
    project = new ElectronProject();
});

