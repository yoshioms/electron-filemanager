const shell = require('electron').shell
const os = require('os')

shell.showItemInFolder(os.homedir())
shell.openExternal('http://electron.atom.io')