class Item {
  constructor(name, sellIn, quality){
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}
function clamp(min, max) {
  // Higher Order Function
return function(x) {
  if (x < min) return min 
  if (x > max) return max
  return x
}
}

class Shop {

  constructor(items=[]){
    this.items = items
  }



  updateQuality() {
    const AGEDBRIE = "Aged Brie"
    const BACKSTAGEPASSES = "Backstage passes to a TAFKAL80ETC concert"
    const SULFURAS = "Sulfuras, Hand of Ragnaros"
    const CONJURED = "Conjured"
    const qualityClamp = clamp(0, 50)
    for (let item of this.items) {
      item.sellIn --
      switch (item.name) {
        case SULFURAS:
          break
        case BACKSTAGEPASSES:
          if (item.sellIn > 10) {
            item.quality++
          } else if (item.sellIn > 5 && item.sellIn <= 10) {
            if (item.quality >= 48 && item.quality <= 50) {
              item.quality = 50
            } else {
              item.quality += 2
            }
          } else if (item.sellIn > 0 && item.sellIn <= 5) {
            if (item.quality >= 48 && item.quality <= 50) {
              item.quality = 50
            } else {
              item.quality += 3
            }
          } else {
            item.quality = 0
          }
          break
        case AGEDBRIE:
          item.quality = qualityClamp(++item.quality)
          break
        case CONJURED:
          if (item.quality >= 2 && item.sellIn > 0) {
            item.quality -= 2
          }
          if (item.quality >= 4 && item.sellIn <= 0) {
            item.quality -= 4
          }
          break
          
        default:
          if (item.sellIn <= 0) {
            item.quality -= 2
          } else {
            item.quality--
          }
          item.quality = qualityClamp(item.quality)
      }
      
  }
  return this.items
}
}
module.exports = {
  Item,
  Shop
}