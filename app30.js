function call() {
    console.log("hello");
}
function get(){
    setTimeout(function () {
    console.log("hello");
},2000);}

 async function say() {
    await get();
    await get();
    await get();
}


function next() {
    console.log("next");
}
say();


// let co = `{
//     "fact": "British cat owners spend roughly 550 million pounds yearly on cat food.",
//     "length": 71
//   }`;

//   let valid = JSON.parse(co);

//   console.log(valid);





// let url= "https://official-joke-api.appspot.com/jokes/random";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.setup);
//     console.log(data.punchline);
// })
// .catch((err)=>{
//     console.log("ERROR-", err);
// });

