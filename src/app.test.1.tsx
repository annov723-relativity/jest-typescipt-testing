import {getItemsTotal} from "./etc/get-items-total"

describe("The application",()=>{
  it.todo("should display the correct output") //so it is passed with adnotation it is "TO DO"

  describe("Get items total", ()=>{
    const specitems = [
      {name: "item 1", cost: 100},
      {name: "item 2", cost: 200},
      {name: "item 3", cost: 300}
    ]

    it("should correctly total the items", ()=>{
      expect(getItemsTotal(specitems)).toBeCloseTo(600)
    })

    it("should throw an error on a negative cost", ()=>{
      const brokenSpecArray = [{name:"Broken", cost: -100}]
      expect(()=>getItemsTotal(brokenSpecArray)).toThrow()
    })

    const generatedSpecs = []
    const generatedSpecCount = 10

    for (let i = 0; i < generatedSpecCount; i++){
      const minValid = 1
      const maxValid = 10000
      generatedSpecs.push({
        name : "",
        cost : Math.random() * maxValid - minValid
      })
    }

    it("should work with generated values", ()=>{
      const expected = generatedSpecs.reduce((acc, item)=>acc + item.cost, 0)
      expect(getItemsTotal(generatedSpecs)).toBeCloseTo(expected)
    })

  })
})
