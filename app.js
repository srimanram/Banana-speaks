var btn = document.querySelector(".btn-trans");
var textint=document.querySelector(".text-int");
var output=document.querySelector("#output");

function click() {
    output.innerText="banana "+ textint.value;
};
btn.addEventListener("click", click)