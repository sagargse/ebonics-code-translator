var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");  

var serverURl = "https://api.funtranslations.com/translate/ebonics";
 function getTranslationURL(text){
     return serverURl + "?" + "text=" + text
 }
 function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with the server! please try again later")
 }
function clickHandler(){
var inputText = textInput.value; 


fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => 
     { var translatedText =json.contents.translated;
        outputDiv.innerText = translatedText;
    }) 
    .catch(errorHandler)
 };
 btnTranslate.addEventListener("click",clickHandler);
 