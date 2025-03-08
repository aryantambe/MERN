//let col=document.querySelector("h1").style.color="red"

//instead of this what we can do in just use jQuery to simplify our tasks.
//The Syntax goes like this: $("h1").css("color","red");
//First we need to embed jQuery in out html page


$("h1:first").css("color","black") //For the first h1
$("button").css("background-color", "purple") //selects all the buttons (default)
$("button").css("color", "white") //selects all the buttons (default)
console.log($("h1").css("color"))
console.log($("h1").css("font-size"))

$("h1").addClass("big-title margin-50")
$("h1").removeClass("big-title margin-50")

$("button").text("<em>Hey</em>") // .text ignore the em tags and just prints the mas it is 
$("button").html("<em>Hey</em>") //.html doesnt ignore but changes the html of the elements
$("h1:eq(1)").text("World")

$("a").attr("href","https://yahoo.com") //changes the href from google to yahoo.com
console.log($("img").attr("src")) //gets the value of the src attribute in the image tag
console.log($("img").attr("alt")) //gets the value of the alt attribute in the image tag

$("button").click(()=>{
    $("h1").css("color","purple")
})
$("body").keydown(function(event){
    let t=(event.key)
    $("h1").text(t)
})
$("button").on("mouseover", ()=>{
    $("button").css("background-color","pink")
})

//Adding and removing new elements using jQuery
$("h1:first").before("<button>I am before h1</button>")
$("h1:first").after("<button>I am after h1</button>")
$("h1:first").prepend("<button>I am inside h1 but before h1</button>")
$("h1:first").append("<button>I am inside h1 but after h1</button>")
$("h1:first").addClass("big-title")
$("input").remove(); //removes the input element

//Adding animations using jQuery
$("img").on("click",()=>{
    $("button").fadeToggle(); //hides and unhides buttons when img is clicked
})
$("img").on("click",()=>{
    $("h1").animate({  opacity:0.5}); 
})
$("img").on("click",()=>{
    $("h1").slideUp.slideDown.animate({  opacity:0.5}); 
})
