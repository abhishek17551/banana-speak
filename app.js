var btntranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txtInput");
var outputDiv=document.querySelector("#output");
var serverURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'


btntranslate.addEventListener("click", clickEventHandler);

function getTranslationURL(text){
    return serverURL+"?"+text
}

function clickEventHandler(){
   var inputText=txtInput.ariaValueNow;
   fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => console.log(json))


}