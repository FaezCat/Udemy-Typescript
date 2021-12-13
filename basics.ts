function addTwoValues(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const displayResult = true;
const resultPhrase = "Result is: ";

const result = addTwoValues(number1, number2, displayResult, resultPhrase);