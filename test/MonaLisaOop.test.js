'use strict'

const {Shop, Item, Sulfuras, AgedBrie, BackstagePasses, Conjured, DefaultItem} = require("../src/MonaLisaOop")

describe("MonaLisa", function() {
  
  it("should foo", function() {
    const monaLisa = new Shop([new DefaultItem("foo", 0, 0)])
    const items = monaLisa.updateQuality()
    expect(items[0].name).toBe("foo")
  })

  describe("Normal", function() {


  it("update quality", function() {
  const normal = new DefaultItem("normal", 10, 20)
  const shopwithNormal = new Shop([normal])
  shopwithNormal.updateQuality()
  expect(normal.sellIn).toBe(9)
  expect(normal.quality).toBe(19)
  })
  it("Should be Normal", function() {
    const normal = new DefaultItem("normal", 10, 20)
    const shopwithNormal = new Shop([normal])
    expect(shopwithNormal.items[0].name).toBe("normal")
  })
  it("check quality", function() {
    const normal = new DefaultItem("normal", 10, 20)
    const shopwithNormal = new Shop([normal])
    expect(normal.quality).toBe(20)
  })

})
  describe("Aged Brie", function() {

  it( "Update Quality", function() {
  const agedBrie = new AgedBrie("Aged Brie", 2, 0)
  const shopwithAgedBrie = new Shop([agedBrie])
  shopwithAgedBrie.updateQuality()
  expect(agedBrie.quality).toBe(1)
  expect(agedBrie.sellIn).toBe(1)
  })
  it( "should be Aged Brie", function() {
  const agedBrie = new AgedBrie("Aged Brie", 2, 0)
  const shopwithAgedBrie = new Shop([agedBrie])
  expect(shopwithAgedBrie.items[0].name).toBe("Aged Brie")
  })
  it( "check quality", function() {
  const agedBrie = new AgedBrie("Aged Brie", 2, 0)
  const shopwithAgedBrie = new Shop([agedBrie])
  expect(agedBrie.quality).toBe(0)
  })
})
  describe("Sulfuras", function() {
  it( "Update Quality", function() {
  const sulfuras = new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80)
  const shopwithSulfuras = new Shop([sulfuras])
  shopwithSulfuras.updateQuality()
  expect(sulfuras.quality).toBe(80)
  })
  it( "should be Sulfuras", function() {
  const sulfuras = new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80)
  const shopwithSulfuras = new Shop([sulfuras])
  expect(shopwithSulfuras.items[0].name).toBe("Sulfuras, Hand of Ragnaros")
  })
  it( "check quality", function() {
  const sulfuras = new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80)
  const shopwithSulfuras = new Shop([sulfuras])
  expect(sulfuras.quality).toBe(80)
  expect(sulfuras.sellIn).toBe(0)
  })

})
  describe("Backstage passes", function() {
  it( "Update Quality", function() {
  const backstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 15, 20)
  const shopwithBackstagePasses = new Shop([backstagePasses])
  shopwithBackstagePasses.updateQuality()
  expect(backstagePasses.quality).toBe(21)
  expect(backstagePasses.sellIn).toBe(14)
  })
  it( "should be Backstage passes", function() {
  const backstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 15, 20)
  const shopwithBackstagePasses = new Shop([backstagePasses])
  expect(shopwithBackstagePasses.items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
  })
  it( "check quality", function() {
  const backstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 15, 20)
  const shopwithBackstagePasses = new Shop([backstagePasses])
  expect(backstagePasses.quality).toBe(20)
  })
  it( "check quality at 9 days", function() {
  const backstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 9, 20)
  const shopwithBackstagePasses = new Shop([backstagePasses])
  shopwithBackstagePasses.updateQuality()
  expect(backstagePasses.quality).toBe(22)
  })
  it( "check quality at 4 days", function() {
  const backstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 4, 20)
  const shopwithBackstagePasses = new Shop([backstagePasses])
  shopwithBackstagePasses.updateQuality()
  expect(backstagePasses.quality).toBe(23)
  })
  it("Check sell in at 0", function() {
  const backstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 0, 20)
  const shopwithBackstagePasses = new Shop([backstagePasses])
  shopwithBackstagePasses.updateQuality()
  expect(backstagePasses.quality).toBe(0)
  })
})
  describe("Conjured", function() {
  it( "Update Quality", function() {
  const conjured = new Conjured("Conjured", 3, 6)
  const shopwithConjured = new Shop([conjured])
  shopwithConjured.updateQuality()
  expect(conjured.quality).toBe(4)
  expect(conjured.sellIn).toBe(2)
  })
})
})

describe("MonaLisa", function() {
  it("should foo", function() {
    const monaLisa = new Shop([new DefaultItem("foo", 0, 0)])
    const items = monaLisa.updateQuality()
    expect(items[0].name).toBe("foo")
  })
  it('QualityChanges', function() {
    const monaLisa = new Shop([new DefaultItem("tmp", 1, 1)])
    const items = monaLisa.updateQuality()
    expect(items[0].quality).toBe(0)
  })
  it('SellInChanges', function() {
    const monaLisa = new Shop([new DefaultItem("tmp", 1, 1)])
    const items = monaLisa.updateQuality()
    expect(items[0].sellIn).toBe(0)
  })
  it('QualityNeverNegative', function() {
    const monaLisa = new Shop([new DefaultItem("tmp", 0, 0)])
    const items = monaLisa.updateQuality()
    expect(items[0].quality).toBe(0)
  })
  it('AgedBrieQualityUp', function() {
    const monaLisa = new Shop([new AgedBrie("Aged Brie", 1, 1)])
    const items = monaLisa.updateQuality()
    expect(items[0].quality).toBe(2)
  })
  it('QualityNeverOver50', function() {
    const monaLisa = new Shop([new AgedBrie("Aged Brie", 1, 50)])
    const items = monaLisa.updateQuality()
    expect(items[0].quality).toBe(50)
  })
  it('BackstagePassQuality', function() {
    const monaLisa = new Shop([new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 11, 1)])
    const items = monaLisa.updateQuality()
    expect(items[0].quality).toBe(3)
  })

  
})
