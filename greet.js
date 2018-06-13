const languages = document.querySelector('.language');
const buttons = document.querySelector('.buts')
const reset = document.querySelector('.butts')
var check = document.querySelector("input[name='language']:checked")
var NameEntered = document.querySelector('.type')
var greeted = document.querySelector('.answer')





var factory = greeting()

function greetDom() {
  factory.greetEnglish();
  factory.greetAfrikaan();
  factory.greetArabic();
}

function greet() {
  //when the greet button is pressed check if this user was already greeted before
  //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
  if (namesGreeted[NameEntered] === undefined) {
    greetingsCounter++;
    //add an entry for the user that was greeted in the Object Map
    namesGreeted[NameEntered] = 0;
    //update the DOM to display the counter
    greeted.innerHTML = greetingsCounter;

  }

 reset.addEventListener('click',function()){

 }

  buttons.addEventListener('click', function()) {
        greetDom
      }
