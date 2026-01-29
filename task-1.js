let str = "JavaScript is amazing I hAve An Apple";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
        count++;
    }
}

console.log(count);





let str = "JavaScript is amazing I hAve An Apple";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "a"||str[i] === "A") {
        count++;
    }
}

console.log(count);





let line="Education is important".toLowerCase();
let vowels=["a","e","i","o","u"];
let findVowels=true;

for(let i=0; i<vowels.length; i++){
    if(!line.includes(vowels[i])){
        findVowels=false;
        break;
    }
}

if(findVowels){
    console.log("There is vowel.");
}
else{
    console.log("There is no vowel.");
}





let str = "Xerox and xylophone are examples";

let newStr=str.replace(/x/g,"y").replace(/X/g,"Y");
console.log(newStr);
