//setTimeout
function hello(){
    console.log("hello")
}
setTimeout(hello,2000) //prints after 2secs

setTimeout(()=>{ //used a arrow function
    console.log("world")
},4000)

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data"+dataId)
        if(getNextData){
            getNextData();
        }
    },2000)   
}                   
getData(1,() => {           //this is a callback hell
    getData(2,()=>{
        getData(3)
    })
})