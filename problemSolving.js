/* Task 1
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/
const heights2 = [167, 190, 120, 165, 137];
function lowNumber(heights2){
    let low = heights2[0];
    for(let i = 0; i < heights2.length;i++){
        if(heights2[i] < low){
            low = heights2[i];
        }
    }
    return low;
}
console.log(lowNumber(heights2));
/* Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestName(friends){
    let smallest = friends[0];
    for(let i =0; i<friends.length;i++){
        if(friends[i].length < smallest.length){
            smallest = friends[i];
        }
    }
    return smallest;
}

console.log(smallestName(friends));
/* Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/
function calculateElectronicsBudget(laptop, tablet, mobile){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    const totalBudget = (laptop * laptopPrice) + (tablet * tabletPrice) + (mobile * mobilePrice);
    return totalBudget;
}
console.log(calculateElectronicsBudget(2,3,4));
/* Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
*/
    const phones = [
      { model: "PhoneA", brand: "Iphone", price: 95000 },
      { model: "PhoneB", brand: "Samsung", price: 40000 },
      { model: "PhoneC", brand: "Oppo", price: 26000 },
      { model: "PhoneD", brand: "Nokia", price: 35000 },
      { model: "PhoneE", brand: "Iphone", price: 105000 },
      { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function averagePrice(phones){
        let total = 0;
        for(let i = 0 ; i < phones.length; i++){
            total += phones[i].price;
        }
        return total/phones.length;
    }
    console.log(averagePrice(phones).toFixed(2));
/* Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
*/

 const employees = [
   { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
   { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
   { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
   { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
 ];

    function totalSalary(employees){
        let total =0;
        for(let i = 0; i<employees.length;i++){
            const currentSalary=(employees[i].starting) + (employees[i].experience*employees[i].increment);
            total += currentSalary;
        }
        return total/12;
    }

    console.log(totalSalary(employees).toFixed(2));

