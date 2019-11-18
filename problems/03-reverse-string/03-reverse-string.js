/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
let string = []

let result = []

let resultString = ``

function reverseStr(someStr) {
    for(let i = 0; i < someStr.length; i++){
        string[i] = someStr.charAt(i)
    }
    for(let j = 0; j < string.length; j++){
        result[j] = string[string.length - 1 - j]
    }
    for(let j = 0; j < result.length; j++){
      resultString += result[j]
    }
    return resultString
  }
  
console.log(reverseStr(`Tomas`));