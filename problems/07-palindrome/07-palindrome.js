/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
let stringArr = []

let reverse = []

let reverseString = ``

function isPalindrome(someStr) {
    for(let i = 0; i < someStr.length; i++){
        stringArr[i] = someStr.charAt(i)
    }
    for(let j = 0; j < stringArr.length; j++){
        reverse[j] = stringArr[stringArr.length - 1 - j]
    }
    for(let k = 0; k < reverse.length; k++){
      reverseString += reverse[k]
    }
    if(reverseString === someStr){
        return true
    }else{
        return false
    }
}

console.log(isPalindrome(`Tomas`));