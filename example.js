var airFlock = require('./')

airFlock('testing', function (sock) {
  sock.write('greetings martian (' + process.pid + ')\n')
  sock.pipe(process.stdout)
})
