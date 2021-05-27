let inputArea = document.querySelector('.input-textarea');
let outputArea = document.querySelector('.output-area');

let btnTranslate = document.querySelector('.btn-translate');
let btnReset = document.querySelector('.btn-reset');

let url = "https://api.funtranslations.com/translate/pirate.json";

const URLConstructor = (URL) => { return url+"?text=" + URL};


btnTranslate.addEventListener("click", TranslateHandler);

function TranslateHandler(event)  {
    fetch(URLConstructor(inputArea.value))
    .then(response => response.json())
    .then(result => {
        outputArea.innerText= result.contents.translated})
    .catch(() => alert('Some server error'))
};

btnReset.addEventListener("click",ResetHandler);

function ResetHandler(event) {
    inputArea.value='';
    outputArea.innerText='';
};