let arr = [5,6,80,4,5,5];

let check = arr.reduce((num,el) =>{
    if(num%10==0  || num==0) {
        console.log("divisible by 10");
    }else{
        console.log("not divisible by 10");
    }
});

console.log(check);