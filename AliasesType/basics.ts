function add(n1: number, n2: number, n3: number, showResult: boolean, phrase: string){
    //if (typeof n1 === 'number' && typeof n2 === 'number'){
    //    throw new Error('Incorrect input!');
    //}
    const result = n1 + n2;
    n3 = 11;
    if(showResult){
        console.log(phrase + result);
    } else {
        return result;
    }
    return result;
}

const number1 = 5;
const number2 = 2.8;
let number3: number;
number3 = 10;
const printResult = true;
const resultPhrase = 'Result is: ';

//const result = add(number1, number2, printResult);
//console.log(result);
add(number1, number2, number3, printResult, resultPhrase);