const fs = require('fs')

//global flags
// let metric = false
let numberFormatter = commaSize // default if not metric
let blockSize = 1



// console.log('Hello World!')
// options other than node, Deno, and bun
function usage() { // This will always be called usage, it is a convention
  let helpString = `Usage: node spike.js <command> [options]`
  console.log(helpString)
}

function setFlags() {
  console.log("setFlags");
  const args = process.argv.slice(2); // idiom to remove the first two elements of the array
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '-m') {
      // metric = true
      numberFormatter = metricSize
    }
    if (args[i] === '-b') {
      blockSize = 4096
    }
  }
}
  
function metricSize(size) {
  roundSize(size)
  return 'metricSize'
  }

function commaSize(size) {
  roundSize(size)
  return 'commaSize'
}
  
function roundSize(size) {
  if (blockSize === 1) return size

  return 'TODO: round up (ceiling) the size to the nearest 4k'
}

function buildTree() {
  console.log('buildTree')
}

function printTree() {
  let size = 9
  console.log('filename', numberFormatter(size))
}


function main() {

  setFlags()
  buildTree()
  printTree()
  }
  
main()

//GRAVEYARD

  // const nums = args.map((arg) => Number(arg)) // converts the strings to numbers
  // const parsedInts = args.map(arg => parseInt(arg))
  // const nums = args.map(Number) // converts the strings to numbers
// console.log(args, nums) //This is how we get the command line arguments
  
    
//   if (metric) {
//     console.log('filename', metricSize(size))
//   }
//   else {
//     console.log('filename', commaSize(size))
//   }
// }