var btn = document.querySelector(".btn-trans");
var textint=document.querySelector(".text-int");
var output=document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function gettranslationurl(input){
    return serverURL + "?" + "text=" +input
}

function errorhandler(error){
    console.log("error occur",error);
    alert("there is something wrong! try after sometime")
}
function click() {
   var inputText = textint.value;//taking input
   fetch(gettranslationurl(inputText))
   .then(response => response.json()) 
   .then(json =>{
       var translatedtext =json.contents.translated;
       output.innerText = translatedtext; //outputing
   })
        .catch(errorhandler)
};
btn.addEventListener("click", click)