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
