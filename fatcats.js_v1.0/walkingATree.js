// console.log('Hello world!')

let root = {
  value: "P",
  children: [
    {
      value: "F",
      children: [
      {
        value: "C",
        children: [
        {
          value: "E", 
          children: []
        }
      ]
    }
    ]},
    {value: "R", children: []
  }
]
};



console.log(JSON.stringify(root, null, 2));



function preOrder(cur) {
  if(!cur) return

  let {value, children} = cur
  console.log(value)
  console.group()
  for (let child of children) {
    preOrder(child)
  }
  console.groupEnd()
}



function postOrder(cur) {
  if(!cur) return
  const {value, children} = cur
  console.group()
  for (let child of children) {
    postOrder(child)
   }
  console.groupEnd()
  console.log(value)
}


function main() {
  console.log('\nPre-order: ' )
  preOrder(root)
  // console.log('\nIn-order: ');
  // inOrder(root)
  console.log('\nPost-order: ');
  postOrder(root)
  // console.log('\nLevel-order: ');
  // levelOrder(root)
  
}

main()


//ELEPHANT CODE GRAVEYARD

// function levelOrder(cur) {
//   const queue = [cur]
//   while (queue.length !== 0) {
//     const cur = queue.shift() // remove the first element from the queue
//     if (cur === null) continue;
//     console.log(cur.value);
//     queue.push(cur.left);
//     queue.push(cur.right);
    
//   }
// }

// function inOrder(cur) {
//   if(cur === null) return
//   const {value, left, right} = cur
//   inOrder(left)
//   console.log(value)
//   inOrder(right)
// }

// walk a tree
//   Depth First (stack)
//     pre-order
//     in-order
//     post-order
//   Breadth First (queue)
//     level-order