/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
let even

function isEven(someNum) {
    even = someNum/2
    if(someNum.toString().length === even.toString().length){
        return true
    }else{
        return false
    }
}

console.log(isEven(403));