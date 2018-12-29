const express =require('express')
const math = require('./services/math')

let app = express()

const port =8000


app.get ('/', (req,res)=>{
    res.send("Testing")
})

//----------ADDING
app.get('/math/add', (req, res)=>{

let values = Object.values(req.query)

console.log(values)
    res.send({
        input:(req.query),
        sumString: math.sumString(values),
        sum: math.getSum(values)
      })
// res.send(req.query)
})

//-----------MULTIPLYING
app.get('/math/multiply', (req,res)=>{
    let newValues=Object.values(req.query)
// console.log(newValues)
    res.send({
            input: (req.query),
            productString: math.productString(newValues),
            product: math.getProduct(newValues)
})
})

app.listen(port)