let para1 = document.createElement("p");

para1.innerText="Hey I'm Red";
document.querySelector("body").append(para1);
para1.classList.add('red');

let h3 = document.createElement("h3");

h3.innerText="Hey I'm blue";
document.querySelector("body").append(h3);
h3.classList.add('blue');
