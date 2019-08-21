var word = "dog";
var wordr = "";

for(x = word.length-1; x >= 0; x--){
    wordr += word[x];
}

console.log("Regular ",word, "Reverse", wordr, "\n" );
console.log(word == wordr ? "Is Palindrome!" : "Is NOT Palindrome", "\n");
