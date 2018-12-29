const express =require('express')

let app = express()

const port =3000


app.get ('/', (req,res)=>{
    res.send("Testing")
})

app.listen(port)