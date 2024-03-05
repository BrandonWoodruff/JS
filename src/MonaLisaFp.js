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


/*class Item {
  constructor(name, sellIn, quality){
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}*/

function item(name, sellIn, quality){
  this.name = name
  this.sellIn = sellIn
  this.quality = quality

  return this
}

function shop (items=[]){
  this.items = items

  this.updateQuality = function() {
    for (let item of this.items) {
      item.updateQuality()
    }
    return this.items
  }
}
/*
function sulfuras{
  

  updateQuality() {
    const SULFURAS = "Sulfuras, Hand of Ragnaros"
    
      this.sellIn--
      return this.quality = 80
    
    }
  }




function agedBrie(){
  updateQuality() {
    const AGEDBRIE = "Aged Brie"
    const qualityClamp = clamp(0, 50)
    
      this.sellIn--
      this.quality = qualityClamp(++this.quality)
      return this.quality
      }
    }
  

  function backstagePasses(){
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

  function conjured(){
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
*/
    function defaultItem(){
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
  item,
  shop,
  // sulfuras,
  // agedBrie,
  // backstagePasses,
  // conjured,
  defaultItem

}