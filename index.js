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
    // console.log(req.query)
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


//-----------------GIPHY  Search 
app.get('/gif', (req, res) => {

const api_key = 'uw64B4Ca6cgv1x5c5MDm8c4FvRDbMzvE';
const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q='${req.query}'`

console.log(req.query);

const request = require('request');
request(url, function (error, response, body) {
    let newArray=[];
    for (let i=0; i<JSON.parse(body).data.length; i++){
        newArray.push(JSON.parse(body).data[i].images.original.url)
    }
    res.send(newArray);
    
    // console.log(JSON.parse(body))
    // console.log( body.data[0].images.original.url);
});
});


app.listen(port)

