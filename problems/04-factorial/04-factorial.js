/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
let result = 1

let x;

function factorial(sumNum) {
    if(x === 0){
        return result
    }
    if(sumNum <= 0){
        return result
    }

    result *= sumNum

    x = sumNum

    return factorial(sumNum - 1)  
}

console.log(factorial(11));

