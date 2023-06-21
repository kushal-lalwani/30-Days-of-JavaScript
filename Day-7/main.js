//Exercise : Level -1

function fullName(firstName , lastName){
    return `${firstName} ${lastName}`;
}
console.log(fullName(`Kushal` , `Lalwani`));

function addition(x,y){
    let sum = x + y;
    return sum;
}
console.log(addition(1,2));

let perimeter = (length , breadth) => {
    let perimeter = 2*(length + breadth);
    return perimeter;
}
console.log(perimeter(10,5));

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10));

let speed = (distance, time) => {
    return distance/time;
}
console.log(speed(10,5));

function BMI(weight , height){
    let bmi = weight/(height**2);
    if(bmi < 18.5){
        console.log(`UnderWeight`);
    }
    else if(bmi <= 24.9 && bmi >=18.5){
        console.log(`Normal`);
    }
    else if(bmi >= 25 && bmi <= 25){
        console.log(`OverWeight`);
    }
    else{
        console.log(Obese);
    }
}

const maxOfThree = (a, b, c) => {
    if(a>=b){
        if(a>=c){
            return a;
        }else{
            return c;
        }
    }else if(b>=c){
        return b;
    }else{
        return c;
    }
}
console.log(maxOfThree(4,5,6));


// Exercise: Level-2


function solveQuadratic(a, b, c) {  
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return { root1, root2 };
    }
    else if(discriminant < 0){
        console.log(`No real Roots`);
    }
}
console.log(solveQuadratic());
console.log(solveQuadratic(1, 4, 4));
console.log(solveQuadratic(1, -1, -2));
console.log(solveQuadratic(1, 7, 12));
console.log(solveQuadratic(1, 0, -4)); 
console.log(solveQuadratic(1, -1, 0));

const swap = (a , b) => {
    let c = a;
    a = b;
    b = c;
    return {a , b};
}
console.log(swap(4,8));

const capitalizeArray = arr => {
    const newArr = [];
    for (const element of arr) {
      newArr.push(element.toUpperCase());
    }
    return newArr;
  }
console.log(capitalizeArray([`Kushal` , `Samyak` , `Harsh`]));

const addItem = (arr,item) => {
    arr.push(item);
    return arr;
  }
console.log(addItem([1,2,3,4] , 5));

function removeItem(index, array) {
    const newArray = [...array];
    newArray.splice(index, 1);
    return newArray;
}

function sumOfOdds(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(sumOfOdds(10));

  function sumOfEven(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 2 == 0) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(sumOfEven(10));

const hexcode = function(){
let hexcode = `0123456789ABCDEF`;
let random =`#`;
for(let i = 0 ; i < 6 ; i++){
    let randomIndex = Math.floor(Math.random() * hexcode.length);
    random += hexcode.charAt(randomIndex); 
}
return random;
}
console.log(hexcode());

//Exercise : Level-3

function rgb(){
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

let randomColor = `rgb(${red},${green},${blue})`;
console.log(randomColor);
}
rgb();

function factorial(x){
    let fact = 1;
    for(let i = 1 ; i <= x ; i++){
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));

function sum(...numbers){
    let sum = 0;
    for(const number of numbers){
        sum += number;
    }
    return sum;
}
console.log(sum(1,5,9,10,20));

function uniqueSeven() {
    let x;
    let arr = [];
    
    while (arr.length < 7) {
      x = Math.floor(Math.random() * 10); // Corrected Math.random usage
      if (!arr.includes(x)) {
        arr.push(x);
      }
    }
    
    return arr;
  }
  const randomNumbers = uniqueSeven();
  console.log(randomNumbers);
