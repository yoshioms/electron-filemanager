const shell = require('electron').shell

const os = require('os')

shell.showItemInFolder(os.homedir())