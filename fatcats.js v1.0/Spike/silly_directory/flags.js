'use strict'
const fs = require('fs')

console.log('Hello World')

function usage() {
console.log('Usage')
  const text = fs.readFileSync('help.txt', 'utf-8')
  console.log(text)
  //exit program
  process.exit(1)
}

usage()