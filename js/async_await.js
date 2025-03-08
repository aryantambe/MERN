async function hello(){
    console.log("hello");
}
let promise=hello();
console.log(promise)
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200); //200 represents a successfull api call
        },2000)  
    })
}
//api(); we wont call it like this as this is an asynchronous call 
async function getWeatherData(){
    await api();
   // console.log("henlo i am 2 secs late") does not get executed, it waits for api();
   await api();
}
getWeatherData();

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("data"+dataId);
           resolve("Success")
        },5000)
    }) 
}
async function getOriginalData(){
    await getData(1);
    await getData(2);
    await getData(3);
}
getOriginalData();

(async function(){     //This is a IIFE- immediately involved function expression 
    await getData(1);
    await getData(2);
    await getData(3);
})();

(async ()=>{    //This is just a more shorter version, using arrow functions
    await getData(1);
    await getData(2);
})();

