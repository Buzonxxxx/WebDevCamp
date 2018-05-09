console.log('Starting app')

const fs = require('fs')
const os = require('os')

//get system user info
const user = os.userInfo()

// create file and append string
fs.appendFileSync('greeting.txt', `Hello ${user.username}!`)