'use strict'



function clamp(min, max) {
  // Higher Order Function
  // y = 5 //var is function scoped, if not declared it will be global and can cause bugs
  // let y = 5 //let is block scoped

  return function(x) {
    if (x < min) return min 
    if (x > max) return max
    return x
  }
}


class Item {
  constructor(name, sellIn, quality){
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}


class Shop {

  constructor(items=[]){
    this.items = items
  }
  updateQuality() {
    for (let item of this.items) {
      item.updateQuality()
    }
    return this.items
 }}

class Sulfuras extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn)
    this.quality = 80
  }

  updateQuality() {
    const SULFURAS = "Sulfuras, Hand of Ragnaros"
    
      this.sellIn--
      return this.quality = 80
    
    }
  }




class AgedBrie extends Item{
  updateQuality() {
    const AGEDBRIE = "Aged Brie"
    const qualityClamp = clamp(0, 50)
    
      this.sellIn--
      this.quality = qualityClamp(++this.quality)
      return this.quality
      }
    }
  

  class BackstagePasses extends Item{
    updateQuality() {
      this.sellIn--
      const BACKSTAGEPASSES = "Backstage passes to a TAFKAL80ETC concert"
      const qualityClamp = clamp(0, 50)
        if (this.sellIn > 10){
          this.quality++
        }if ( this.sellIn > 5 && this.sellIn <= 10) {
          this.quality += 2
        }if (this.sellIn > 0 && this.sellIn <= 5) {
          this.quality += 3
         } if ( this.sellIn <= 0) {
          this.quality = 0
          
         }
          
      
      this.quality = qualityClamp(this.quality)
      return this.quality
    }}

  class Conjured extends Item{
    updateQuality() {
      const CONJURED = "Conjured"
      const qualityClamp = clamp(0, 50)
        this.sellIn--
        if (this.quality >= 2 && this.sellIn > 0) {
          this.quality -= 2
        }
        if (this.quality >= 4 && this.sellIn <= 0) {
          this.quality -= 4
        }
      
      this.quality = qualityClamp(this.quality)
      return this.quality
    }}

    class DefaultItem extends Item{
      updateQuality() {
        const qualityClamp = clamp(0, 50)
          this.sellIn--
          if (this.sellIn <= 0) {
            this.quality -= 2
          } else if (this.sellIn > 0) {
            this.quality--
          } this.quality = qualityClamp(this.quality)
          return this.quality
        }}
      
  
module.exports = {
  Item,
  Shop,
  Sulfuras,
  AgedBrie,
  BackstagePasses,
  Conjured,
  DefaultItem

}