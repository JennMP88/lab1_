const express = require('express');
const math = require('./services/math');

let app = express();

const port = 8000;


app.get('/', (req, res) => {
    res.send("Testing")
})

//----------ADDING
app.get('/math/add', (req, res) => {

    let values = Object.values(req.query)
    let if_NAN = values.every((el)=>{
        return Number(el)
    })
    if(if_NAN){
        res.send({
                input: req.query,
                sumString: math.sumString(values),
                sum: math.getSum(values)
            })
    }else{
       res.send({error: 'You passed a non-number value into the parameters.'})
    }




    

    // if (typeof values !== "number") {
    //     res.send("error please input num")
    // }

    // console.log(values)
    // res.send({
    //     input: (req.query),
    //     sumString: math.sumString(values),
    //     sum: math.getSum(values)
    // })
    // res.send(req.query)
})



//-----------MULTIPLYING
app.get('/math/multiply/', (req, res) => {

    let newValues = Object.values(req.query);
    let if_NAN = newValues.every((el)=>{
        return Number(el)
    })
    if(if_NAN){
        res.send({
                input: req.query,
                productString: math.productString(newValues),
                product: math.getProduct(newValues)
            })
    }else{
       res.send({error: 'You passed a non-number value into the parameters.'})
    }

   

    // for (let i = 0; i < newValues.length; i++) {
    //     let entry = newValues[i];
                
    //    if (Number(entry)){
          
    //         res.send({
    //             input: newValues,
    //             productString: math.productString(newValues),
    //             product: math.getProduct(newValues)
    //         })
        
    //    }else {
       
        // res.send({
        //     input: (req.query),
        //     productString: math.productString(newValues),
        //     product: math.getProduct(newValues)
        // })
//    }
//     }
})


app.listen(port)

