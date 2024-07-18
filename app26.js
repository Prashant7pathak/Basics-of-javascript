let arr = [23,2,45,-1,0,-223];

let min = arr.reduce((min,el)=>{
    if (min<el) {
        return min;
    }else{
        return el;
    }
});

console.log(min);