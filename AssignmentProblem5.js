function resultReport(marks) {
    if(!Array.isArray(marks)){
        return "Invalid input";
    }
    let total = 0;
    let pass=0;
    let fail=0;
    for(let i=0;i<marks.length;i++){
        if(typeof marks[i] !== 'number' || marks[i]<0 || marks[i]>100){
            return "Invalid mark found";
        }
        else if(marks[i]>=40){
            pass++;
            total += marks[i];
        }
        else{
            total += marks[i];
            fail++;
        }
    }
    finalScore = Math.round(total / (pass + fail));
    return {
      finalScore: finalScore,
      pass: pass,
      fail: fail,
    };
}
const marks = [98, 87, 67, 91, 92, 33, 87];
console.log(resultReport(marks));