'use strict'


const fs = require('fs')

//global flags
let path = '.' //default path
let sort = 'unsorted'
let metric = false // use just bytes by default
let threshold = 0
// let help NOT NEEDED
let block = false


  function buildTree(dir, path) {
    //dir is the parent, and is also an object.
    //TODO add up the sizes
    const children = fs.readdirSync(path);

    for (const child of children) {
      //process the children first
      const relativePath = `${path}/${child}`;
      const stats = fs.statSync(relativePath);
      if (stats.isDirectory()) {
        const tempDir = buildTree(
          //go get the children
          {
            //TODO to use our dir function to create a new object and load it into the parent
            name: child,
            size: 0,
            children: [],
          },
          relativePath
        );
        dir.children.push(tempDir);
      }
      if (stats.isFile()) {
        //Create a new object for the file, and then add it to the parent
        let tempFile = file(child, stats.size);
        dir.size += stats.size;
        dir.children.push(tempFile);
      }
    } // Processing the parents now (Adding the children to the parent)
    return dir;
  }

  function printTree(tree) {
    //call usage if
    //TODO walk the tree printing name and size, indenting children
    if (!tree) return;
    const { name, size, children } = tree;
    let number = size.toLocaleString("en-US");

    if (children) {
      console.log(`${name}/ ${number}`);
      console.group();
      for (let child of children) {
        printTree(child);
      }
      console.groupEnd();
    } else {
      console.log(`${name} ${number}`);
    }
  }

  const file = (name, size) => ({ name, size });
  const dir = (name, size, children) => ({ name, size, children });

  function main() {

    const root = {
      name: ".",
      size: 0,
      children: [],
    };
    let tree = buildTree(root, ".");
    console.log();
    printTree(tree);
    console.log();
  }

  main();

  //ELEPHANT CODE GRAVEYARD
  //You can put any comment code here. It'll be ignored by the grader.

  // let treeish = dir('.', 0, []) //empty dir
  // let tree2 = dir('.',0, [  //dir w/2 files and no subdirs
  //   file('readme.txt', 731),
  //   file('fillup.exe', 49333)
  // ])
  // let tree3 = dir('.', 0, [ //dir w/2 files and 2 subdirs (1 empty dir and 1 dir of 1 empty file)
  //   dir('foo', 0, []),
  //   file('bar', 27),
  //   file('baz', 1800831),
  //   dir('foobar', 0,[
  //     file('quux', 0)
  //   ])
  // ])
  // //TODO build up a variety of trees of various widths and depths to test with
  // let tree4 = dir('.', 0, [ //dir w/2 files and 2 subdirs (1 empty dir and 1 dir of 1 empty file)
  //   dir('foo', 0, [
  //     file('bar', 27),
  //     file('baz', 1800831),
  //     dir('foobar', 0,[
  //       file('quux', 0)
  //     ])
  //   ]),
  //   file('bar', 27),
  //   file('baz', 1800831),
  //   dir('foobar', 0,[
  //     file('quux', 0),
  //     file('quux', 0)
  //   ])
  // ])

  // let tree5 = dir('.', 0, [ //dir w/2 files and 2 subdirs (1 empty dir and 1 dir of 1 empty file)
  //   dir('foo', 0, [
  //     file('bar', 27),
  //     file('baz', 1800831),
  //     dir('foobar', 0,[
  //       file('quux', 0),
  //       dir('foo', 0, [
  //         file('bar', 27),
  //         file('baz', 1800831)
  //     ])
  //   ])]),
  //   file('bar', 27),
  //   file('baz', 1800831),
  //   dir('foobar', 0,[
  //     file('quux', 0),
  //     file('quux', 0),
  //     dir('foo', 0, [
  //       file('bar', 27),
  //       file('baz', 1800831),
  //       dir('foo', 0, [
  //         file('bar', 27),
  //         file('baz', 1800831)
  //   ])
  //     ])

  //   ])])

  // let tree6 = dir('.', 0, [ //dir w/2 files and 2 subdirs (1 empty dir and 1 dir of 1 empty file)
  //   file('source.txt', 1),
  //   dir('bar', 0, [
  //     file('wow.exe', 2811721329)])

  //   ])

  // OUTPUT
  // console.log('First Tree')
  // printTree(tree)
  // console.log('Second Tree')
  // printTree(tree2)
  // console.log('Third Tree')
  // printTree(tree3)
  // console.log('Fourth Tree')
  // printTree(tree4)
  // console.log('Fifth Tree')
  // printTree(tree5)
  // console.log('Sixth Tree')
  // printTree(tree6)



//display help.txt and exit
// function usage() {
//   fs.readFile("help.txt", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//     return;
//   });
// }

// function setFlags() {
//   //TODO parse command line arguments
//   const arg = process.argv.slice(2);
//   //TODO check for errors
//   if (
//     arg == "-h" ||
//     arg == "--help" ||
//     arg == "-b" ||
//     arg == "--block" ||
//     arg == "-t" ||
//     arg == "--threshold" ||
//     arg == "-s" ||
//     arg == "--sort" ||
//     arg == "-m" ||
//     arg == "--metric" ||
//     arg == "-p" ||
//     arg == "--path" ||
//     arg == "-v" ||
//     arg == "--version" ||
//     arg == ""
//   ) {
//     return arg;
//   } else {
//     console.log("Error: Invalid flag");
//     return;
//   }
// }


    // // INPUT
    // let arg = setFlags();

    // if (arg == "-h" || arg == "--help") {
    //   usage();
    //   return;
    // }
    // if (arg == "-v" || arg == "--version") {
    //   console.log("Version 0.5.0 (2024-02-27), Developed by Brandon Woodruff");
    //   return;
    // }
