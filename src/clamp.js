function clamp(min, max) {
    // Higher Order Function
  return function(x) {
    if (x < min) return min 
    if (x > max) return max
    return x
  }
}





function clamp2(x) {
  const MIN = 1
  const MAX = 10_000
  if (x < MIN) return MIN 
  if (x > MAX) return MAX
  return x
}

function main() {
  const qualityClamp = clamp(1, 10_000) //Quality clamp is a higher order function
  const yahtzeeClamp = clamp(1, 6) //Yahtzee clamp is a higher order function
  console.assert(qualityClamp(13) === 13, '13 failed to qualityClamp to 13')
  console.assert(qualityClamp(10_010) === 10_000, '10_010 failed to qualityClamp to 10_000')
  console.assert(qualityClamp(-8) === 1, '-8 failed to qualityClamp to 1')
  console.assert(yahtzeeClamp(13) === 6, '13 failed to yahtzeeClamp to 6')
  console.assert(yahtzeeClamp(0) === 1, '0 failed to yahtzeeClamp to 1')
  console.assert(yahtzeeClamp(6) === 6, '6 failed to yahtzeeClamp to 6')
  console.assert(yahtzeeClamp(1) === 1, '1 failed to yahtzeeClamp to 1')
  console.assert(yahtzeeClamp(2) === 2, '2 failed to yahtzeeClamp to 2')
  console.assert(yahtzeeClamp(5) === 5, '5 failed to yahtzeeClamp to 5')
  console.assert(yahtzeeClamp(3) === 3, '3 failed to yahtzeeClamp to 3')
  console.assert(yahtzeeClamp(4) === 4, '4 failed to yahtzeeClamp to 4')

}

main()