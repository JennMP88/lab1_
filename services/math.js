//does the sum
const getSum=(arr)=>{
let newArr=parseArr(arr)
let sum =0
    for(let i=0; i<newArr.length; i++)   {
        sum =sum+newArr[i]
    }
    return sum;
}

const getProduct=(arr)=>{
let newArray=parseArr(arr)
let product=1;
for(let i=0; i<newArray.length; i++)   {
    product =product * newArray[i]
}
return product;
}

//turns the strings into nums
const parseArr=(arr)=>{
let result=[]
for (let i=0; i<arr.length;i++){
     result.push(parseInt(arr[i]))
}   
return result 
}

const sumString=(arr)=>{
    return arr.join(" + ")

}

const productString=(arr)=>{
    return arr.join (" * ")
}

module.exports={
    getSum,
    sumString,
    parseArr,
    getProduct,
    productString}

    