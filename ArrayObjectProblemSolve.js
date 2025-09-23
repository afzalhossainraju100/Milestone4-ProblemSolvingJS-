// problem 1
const colors = ["red", "blue", "green", "yellow", "orange"];
let rev = [];
for(let i= colors.length-1; i>=0;i--){
    rev.push(colors[i]);
}
console.log(rev);
console.log(colors.reverse());
const reversed = colors.slice().reverse();
console.log(reversed)
const revers = [...colors].reverse();
console.log(revers);
const r=[...colors].sort((a,b)=>-1);
console.log(r);

// problem 2
const number = [12, 98, 5, 41, 23, 78, 46];
const even =[];
for(const num of number){
    if(num%2==0){
        even.push(num);
    }
}
console.log(even);
// problem 3
var numbers = ["Tom", "Tim", "Tin", "Tik"];
var result = numbers.join('');

console.log(result);
// Problem 4
const statement = "I am a hard working person";
let newStatement = statement.split(' ').reverse().join(' ');

console.log(newStatement);
// problem 5
const array = [1, 2, 3];
let copy = [].concat(array);
copy.shift();
copy.unshift(99);
console.log(array);
console.log(copy)
let ccopy=Array.from(array);
ccopy[0]=99;
console.log(ccopy);
cccopy=[...array];
// problem 6
const student = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
for(let i=0 ;i<student.length;i++){
console.log(`${student[i].name} Scored ${student[i].marks}`);
};
//problem 7
let twoDarray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
twoDarray[1][0] = 99;

console.log(twoDarray);






