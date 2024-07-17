let str=["hi"," my "," boy ","!"];

function concat(str) {
    let result="";
    for (let i = 0; i < str.length; i++) {
         result += str[i];
    }
    return result;
}

concat(str);