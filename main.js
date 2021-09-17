var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");  

var serverURl = "https://api.funtranslations.com/translate/ebonics.json?text=Hi%21%20I%20like%20the%20girl%20and%20would%20like%20to%20go%20to%20a%20movie%20with%20her%21";
 function getTranslationURL(text){
     return serverURl + "?" + "text=" + text
 }
 function errorHandler(error){
    console.log("error occured",error)
    aler("something wrong with the server! please try again later")
 }
function clickHandler(){
var inputText = textInput.value; //taking input

//calling server for processing
fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => 
     { var translatedText =json.contents.translated;
        outputDiv.innerText = translatedText;
    }) 
    .catch(errorHandler)
 };
 btnTranslate.addEventListener("click",clickHandler);
 