//1 simple multiply
function multiply(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}
const multipl = multiply(4, 5, 6, 2);
console.log(multipl);
//2 function inch to feet
function inchToFeet(inch) {
  const feet = inch / 12;
  const feetNumber = parseInt(feet);
  const newInch = inch % 12;
  const result = `${feetNumber} ft ${newInch} inch`;
  return result;
}

console.log(inchToFeet(75));
//leap Year
function isLeapYear(year){
    if(year % 100!==0 && year%4===0){
        return true;
    }
    else{
        return false;
    }
}

const result = isLeapYear(2024);
if(result){
    console.log("Yes LeapYear!!");

}
else{
    console.log("Not Leap Year!!")
}
//remove duplicate element from array
const biryaniKhor =['abul','babul','abul','babul','kabul','nabul','babul'];

let uniqueArr=[];

function noDuplicate(biryaniKhor){
    for(const person of biryaniKhor){
        if(uniqueArr.includes(person)===false){
            uniqueArr.push(person);
        }
    }
    return uniqueArr;
}
const newList = noDuplicate(biryaniKhor);
console.log(newList);

//duplicaiton count 
const numbers = [5, 6, 11, 12, 98, 5];
const num=12;
function countNumber(numbersArray,num){
let count=0;
for(let i = 0 ;i < numbers.length;i ++){
    if(numbersArray[i]===num){
        count++
    }
}
return count;
}
const total= countNumber(numbers,num);
console.log(total);

//math solution
const min = Math.min(45,888,3,44,55,66,333,3);
console.log(min);
const max = Math.max(45, 888, 3, 44, 55, 66, 333, 3);
console.log(max);
console.log(Math.PI);
console.log(Math.abs(5-109));
console.log(Math.round(2.25));
console.log(Math.round(2.85));
console.log(Math.round(2.25));
console.log(Math.ceil(2.25));
console.log(Math.random());
console.log(Math.random()*10);
//Date 
const today = new Date();
console.log(today);
const date= new Date('2062-10-19');
console.log(date);
console.log(today.getMonth());
console.log(today.getDay());
const specificDate = new Date(2091,0,26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
//swap
let a = 5;
let b = 7;
console.log(a, b);
const temp = a;
a= b;
b= temp;

console.log(a, b);
[a,b]=[b,a];
console.log(a,b);
//take random number from 10 to 20 
const rendomnumber =Math.floor(Math.random()*10)+10;
if(rendomnumber){
    console.log(rendomnumber);
}