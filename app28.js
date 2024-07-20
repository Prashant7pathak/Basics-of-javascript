let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function(){
//     sayyes();
//     // console.log("Button is clicked");
//     // alert("Action is performed");
// };


function sayyes(){
    console.log("Always Say Yes, OK!");
}


 
btn.addEventListener("dblclick", function (event) {
    console.log(event);
    sayyes();
});
btn.addEventListener("click", function (event) {
    console.log(event);
    sayyes();
});

let p = document.querySelector("p");
 p.addEventListener("click", function(event){
    console.log(event);
    sayyes();
 });

 let input= document.querySelector("input");
 input.addEventListener("keydown", function(event){
    console.log(event.key);
    console.log(event.code);
    sayyes();
 });

let body = document.querySelector("body");
setTimeout(()=>{
    body.style.backgroundColor="skyblue";
 },1000);
setTimeout(()=>{
    body.style.backgroundColor="black";
 },2000);
 setTimeout(()=>{
    body.style.backgroundColor="grey";
 },3000);

 setTimeout(()=>{
    p.style.color="red";
 },1000);

 setTimeout(()=>{
    p.style.color="green";
 },2000);

 setTimeout(()=>{
    p.style.color="orange";
 },3000);
