let arr = [45,3,45,607,90,5,6];

let max = arr.reduce((max,el)=>{
    if (el>max) {
        return el;
    }else{
        return max;
    }
});

console.log(max);