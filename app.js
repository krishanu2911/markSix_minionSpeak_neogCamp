var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" ---> this is a testing server link
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text){
    return serverURL + "?" + "text="+ text
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputdiv.innerText = translatedText;
    })
};
btnTranslate.addEventListener("click", clickHandler)