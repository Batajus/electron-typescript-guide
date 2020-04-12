import { app, BrowserWindow } from 'electron';
import * as path from 'path';

export class ElectronProject {

    private win: BrowserWindow;

    constructor() {
        this.win = new BrowserWindow({
            width: 600,
            height: 400
        });
        this.init();
    }

    private init() {
        const indexHTML = path.join(__dirname + '/index.html');
        this.win.loadFile(indexHTML).then(() => {

            // IMPLEMENT FANCY STUFF HERE

        }).catch(e => console.error(e));
    }

}


let project: ElectronProject;
app.on('ready', () => {
    project = new ElectronProject();
});
