let promise= new Promise((resolve,reject)=>{
    console.log("I am a promise")
    resolve("Success");
    reject("Failure")

})

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("data"+dataId);
           resolve("Success")
          //reject("error")
            if(getNextData){
                getNextData();
            }
        },5000)
    })
}
let promise1=getData(123);
promise1.catch(()=>{
     console.log("Promise has been rejected")
})
console.log(promise1)
setTimeout(()=>{
    console.log(promise1)
    promise1.then((res)=>{
        console.log("The promise has been resolved successfully")
        console.log(res);
    })
    promise1.catch((err)=>{
        console.log("The promise has been rejected ")
        console.log(err)
    })
},6000)
