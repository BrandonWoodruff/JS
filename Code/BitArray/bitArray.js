const bitMask = [
  0b00000001,
  0b00000010,
  0b00000100,
  0b00001000,
  0b00010000,
  0b00100000,
  0b01000000,
  0b10000000
]


function bitArray(bitSize) { //NOTE 9 is a placeholder to be replaced
  const byteSize = Math.ceil(bitSize/8) //TODO calc the correct size in bytes
  const bytes = new Uint8Array(byteSize) //automatically 0 filled //used as closure below
  return {
    set:   i => bytes[Math.floor(i/8)] |= bitMask[i % 8] , //TODO write 1 to ith bit in bytes
    clear: i => bytes[Math.floor(i/8)] &= ~ bitMask[i % 8], //TODO write 0 to ith bit in bytes
    get:   i => (bytes[Math.floor(i/8)] & bitMask[i % 8]) ? 1 : 0,//TODO read 0 or 1 from ith bit in bytes
    flip:  i => bytes[Math.floor(i/8)] ^= bitMask[i % 8], //TODO write 1 to ith bit in bytes if it's 0, and vice versa //aka toggle
  } //NOTE do set, clear, get, and flip in one line
    //NOTE use bitMask above and not bit shifting
}




function test() { //TODO
  //make a bit array for 73 bits
  const bits = bitArray(73)
  //put in a console.assert for each of these:
    //do nothing, an untouched bit should be 0
    console.log('Test 1')
    console.assert(bits.get(0) == 0)
    //set a 0 bit, it should be 1
    console.log('Test 2')
    bits.set(0)
    console.assert(bits.get(0) == 1)
     //set a 1 bit, it should be 1
    console.log('Test 3')
    bits.set(1)
    console.assert(bits.get(1) == 1)
    //clear a 0 bit, it should be 0
    bits.clear(0)
    console.log('Test 4')
    console.assert(bits.get(0) == 0)
    //clear a 1 bit, it should be 0
    bits.set(1)
    bits.clear(1)
    console.log('Test 5')
    console.assert(bits.get(1) == 0)
    //flip a 0 bit, it should be 1
    bits.clear(0)
    bits.flip(0)
    console.log('Test 6')
    console.assert(bits.get(0) == 1)
    //flip a 1 bit, it should be 0
    bits.set(1)
    bits.flip(1)
    console.log('Test 7')
    console.assert(bits.get(1) == 0)
}
test()
