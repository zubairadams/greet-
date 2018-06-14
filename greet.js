const languages = document.querySelector('.language');
const button = document.querySelector('.buts')
const reset = document.querySelector('.butts')
var check = document.querySelector("input[name='language']:checked")
var NameEntered = document.querySelector('.type')
var greeted = document.querySelector('.answer')

var factory = greeting();

function greetingDom() {

factory.English();
factory.Afrikaans();
factory.Arabic();
}

button.addEventlistener()
