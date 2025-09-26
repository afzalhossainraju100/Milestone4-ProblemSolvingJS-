function totalFine(fare){
    if(fare <=0 || typeof fare !== 'number'){
        console.log("Invalid");
        return 0;
    }
    const fine = fare +(fare*0.2)+30;
    return fine;
};
const number = '100';
console.log(totalFine(number));
