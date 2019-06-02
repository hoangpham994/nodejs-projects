function TimeNow(){
	let day = new Date();
  let dayList = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  
  let hour = day.getHours();
  let min = day.getMinutes();
  let second = day.getSeconds();
  let month = day.getMonth() + 1;

  console.log(`Time now is ${hour} : ${min} : ${second} ${month}`);
}

function GetFileName(fileName){
    // let name = fileName.split('.').pop();
    let name = fileName.split('.').shift();
    console.log(name);
}

let a = function(number1, number2){
    if(number1 === number2)
        return number1*3;
    if(number1 > number2)
        return number1 - number2;
    if(number2 > number1)
        return number2 - number1;
}

const addPy = n => {
    let twoDigit = n.slice(0,2);
    if(twoDigit.toUpperCase() === 'PY')
        return n;
    else
        return 'Py' + n;
}

const UpercaseEachWord = n =>{
    let words = n.split(' ');
    // words.forEach( element => {
    //     element = element.charAt(0).toUpperCase() + element.slice(1);
    //     console.log(element);
    // })
    words.map(element => element.charAt(0).toUpperCase() + element.slice(1));
    console.log(words);
    n = words.join(' ');
    return n;
}

function ToAlphabe(n){
    n = n.split(' ');
    n.sort();
    n = n.join(' ');
    return n;
}

function getSum(total, num)
{
    return total + num;
}

function PerfectNumber(n){
    let numbers = [];
    for(let i = 1; i < n; i++)
    {
        if(n%i===0)
        {
            numbers.push(i);
        }
    }

    if(numbers.reduce((total,n)=>total +n,0) === n)
    return true;
    else
    return false;
}

function AmountOfCoin(n){
    const coins = [25,10,5,2,1];
    const result = [];
    while(result.reduce((sum,num)=>sum + num, 0) !== n)
    {

    }
 
}

// GetFileName('123.txt');
console.log(PerfectNumber(28));

