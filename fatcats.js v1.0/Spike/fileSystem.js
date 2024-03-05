const fs = require('fs')

const file = (name, size) => ({ name, size, type: "file" });
const dir = (name, size, children) => ({ name, size, children, type: "dir" });


function main() {
  console.log()
  root = {
    name: '.',
    size: 0,
    children: []
  }
  
  let tree = buildTree(root, '.')
  console.log()
  console.log(JSON.stringify(tree, null, 2)) //The null is for a function that we don't need to use. The 2 is for indentation.
}

function buildTree(dir, path) { //dir is the parent, and is also an object.
  //TODO add up the sizes
  const children = fs.readdirSync(path)

  for (const child of children) { //process the children first
    const relativePath = `${path}/${child}`
    const stats = fs.statSync(relativePath)
    if (stats.isDirectory()) {
console.log(`${child}/`) 
      const tempDir = buildTree( //go get the children
        { //TODO to use our dir function to create a new object and load it into the parent
          name: child,
          size: 0,
          children: [],
        },
        relativePath
      );
      dir.children.push(tempDir)
    }
    if (stats.isFile()) {
      //Create a new object for the file, and then add it to the parent
      let tempFile = file(child, stats.size)
      dir.children.push(tempFile)


console.log(child, "file")
    }
  } // Processing the parents now (Adding the children to the parent)
  return dir
}

main()  

//Graveyard

    // postOrder: {
    //   (
    //     name: child,
    //     size: 0,
// )}
    
//if postorder, process the children first
  //if preorder, process the node first