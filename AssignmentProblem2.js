function onlyCharacter(str) {
        if (typeof str !== "string") {
          console.log("Invalid");
          return "";
        }
    str = str.trim();
    const code = [];
    for(let i = 0;i<str.length;i++){
        if(str[i]===' '){
            continue;
        }
        else{
        let upper = str[i];
        code.push(upper.toUpperCase());
        }
    }
    const result = code.join("");
    return result;
}

input = " ha ck m e 1 @ru.c  n  ";
console.log(onlyCharacter(input));
