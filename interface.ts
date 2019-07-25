interface Type1 {
  Name: string
  Age: number
}

interface Type2 {
  Name?: string
  Age?: number
}

var t1: Type1 = { Name: "yukpiz", Age: 28 }
var t2: Type2 = { Name: "yukpiz", Age: 28 }


console.log(typeof t1, t1)
console.log(typeof t2, t1)

var t3: Type1 = t2 as Type1
console.log(typeof t3, t3)

var t4: Type2 = { Name: null, Age: null }
var t5: Type1 = t4 as Type1
console.log(typeof t5, t5)