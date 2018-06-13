function greeting() {
  var input = "";
  var languageSelected = "";

  function English() {

    if (languageSelected === English) {
      return input + "Hello"
    }
  }

  function Afrikaans() {
    if (languageSelected === Afrikaans) {
      return input + "goiemoore"

    }
  }

  function Arabic() {
    if (languageSelected === Arabic) {
      return input + "صباح الخير "
    }
  }

  return {
    greetEnglish: English,
    greetAfrikaan: Afrikaans,
    greetArabic: Arabic
  }
}
