/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
let result = ""

function printShape(shape, height, character) {
  switch (shape) {

    case "square":

      for(let i = 0; i < height; i++){
        result += character
      }
      for(let j = 0; j < height; j++){
        console.log(result);
      }

      break;

    case "triangle":

      let x = 1

      for(let i = 0; i < height; i++){
        let j = 0

        while(j < x){

          result += character

          j++
        }

        console.log(result);

        result = ""

        x++
      }

      break;

    case "diamond":

      let half = height/2

      let charArr = []

      for(let i = 0; i < height; i++){
        charArr[i] = ""
      }
      for(let j = 0; j < half; j++){

        charArr[Math.trunc(half)] = character

        charArr[Math.trunc(half) - j] = character

        charArr[Math.trunc(half) + j] = character

        result = charArr.reduce((accum, ele)=>{

          return accum + ele
        })

        console.log(result);
      }
      for(let k = Math.trunc(half); k > 0; k--){

        charArr[Math.trunc(half) - k] = ""

        charArr[Math.trunc(half) + k] = ""

        result = charArr.reduce((accum, ele)=>{
          
          return accum + ele
        })

        console.log(output);
      }

      break;

    default:

      break;
  }  
}

printShape("triangle", 3, "$");
console.log(printShape());