const fs = require('fs')
let data1 = fs.readFileSync("./test.txt")
console.log(data1.toString())

let data2 = fs.readFile("./test.txt", (err, data3) => {
    console.log("data3", '------data3')
    console.log(data3.toString())
})

console.log(data2) // undefined
