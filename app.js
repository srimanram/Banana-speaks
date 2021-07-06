var btn = document.querySelector(".btn-trans");
var textint=document.querySelector(".text-int");
console.log(textint);
function click() {
    console.log("clicked");
    console.log("Entered text:", textint.value);
}
btn.addEventListener("click", click)