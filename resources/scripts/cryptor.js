let input = document.getElementById("input");
let output = document.getElementById("output");
let select = document.getElementById("select");
let convertButton = document.getElementById("convert");

convertButton.addEventListener("click", function () {
  let text = input.value;
  if (text.length === 0) return;
  switch (select.selectedOptions[0].value){
    case "textToSeven":
      output.value = _10_to_7(text_to_10(text));
      break;
    case "textToTwo":
      output.value = BigInt(text_to_10(text)).toString(2);
      break;
    case "sevenToText":
      if (/^[0123456]+$/.test(text))
      {
        output.value = _10_to_text(_7_to_10(text));
        return;
      }
      output.value = "";
      alert("Неверный формат кода");
      break;
    case "twoToText":
      if (/^[01]+$/.test(text))
      {
        output.value = _10_to_text(BigInt(`0b${text}`));
        return;
      }
      output.value = "";
      alert("Неверный формат кода");
      break;
  }
});

output.addEventListener("click", function () {
  const text = output.value;
  if (text.length){
    alert(text)
  }
});

select.addEventListener("change", function () {
  switch (select.selectedOptions[0].value){
    case "textToSeven":
      input.placeholder = "Текст";
      break;
    case "textToTwo":
      input.placeholder = "Текст";
      break;
    case "sevenToText":
      input.placeholder = "Семеричный код";
      break;
    case "twoToText":
      input.placeholder = "Двоичный код";
      break;
  }
});

function text_to_10(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    let decimal_value = String(letter.charCodeAt(0));
    if (decimal_value.length > 3){
      alert("Недопустимые символы");
      input.value = "";
      output.value = "";
      return;
    }
    while (decimal_value.length !== 3) {
      decimal_value = "0" + decimal_value;
    }
    result += decimal_value;
  }
  return result;
}

function _10_to_7(text) {
  let decimal = BigInt(text);
  if (decimal === 0n) {
    return "0";
  }
  let result = "";
  while (decimal > 0n) {
    let remainder = decimal % 7n;
    result = String(remainder) + result;
    decimal = BigInt(String(decimal / 7n).split(".")[0]);
  }
  return result;
}

function _7_to_10(number) {
  number = BigInt(number);
  console.log(number);
  let decimal = 0n;
  let power = 0n;
  while (number > 0n) {
    let digit = number % 10n;
    decimal += digit * (7n ** power);
    number = BigInt(String(number / 10n).split(".")[0]);
    power += 1n;
  }
  return decimal;
}

function _10_to_text(decimal) {
  decimal = BigInt(decimal);
  let text = "";
  while (decimal > 0n) {
    let remainder = decimal % 1000n;
    let char = String.fromCharCode(Number(remainder));
    text = char + text;
    decimal = BigInt(String(decimal / 1000n).split(".")[0]);
  }
  return text;
}
