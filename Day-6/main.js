// Exercise : Level - 1

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

i = 0;
do{
    console.log(i);
    i++
}
while(i < 10);

for (let i = 10; i > 0; i--) {
    console.log(i);
}

let j = 10;
while(j > 10){
    console.log(j);
    j--;
}

i = 10;
do{
    console.log(i);
    i--
}
while(i > 0);

// let n = parseInt(prompt(`Enter n`));
// for (let i = 0; i < n; i++) {
//     console.log(i);
// }

for(let i = 0 ; i < 7 ; i++){
    console.log(`#`.repeat(i));
}

for(let i = 0 ; i < 11 ; i++){
    console.log(`${i} * ${i} = ${i*i}`);
}

for(let i = 0 ; i < 11 ; i++){
    console.log(`${i} `+` ${i*i} ` +` ${i*i*i} `);
}

for(let i = 0 ; i <= 100 ; i++){
    if(i%2==0){
        console.log(i);
    }
}

for(let i = 0 ; i <= 100 ; i++){
    if(i%2!=0){
        console.log(i);
    }
}

for(let i = 0 ; i <= 100 ; i++){
    if(i%2!=0){
        console.log(i);
    }
}
let sum = 0
for(let i = 0 ; i <= 100 ; i++){
        sum = sum + i;
    
}
console.log(sum);

for(let i = 0 ; i <= 100 ; i++){
    let primeCount = 0;
    for(let j = 1 ; j < i; j++){
        if(i % j == 0){
            primeCount++;
        }
    }
    if(primeCount <= 1){
        console.log(i);
    }
}

let sumEven = 0;
let sumOdd = 0;

for(let i = 0 ; i <= 100 ; i++){
    if(i%2!=0){
        sumOdd += i;
    }
}
console.log(sumOdd);

for(let i = 0 ; i <= 100 ; i++){
    if(i%2==0){
        sumEven += i;
    }
}
console.log(sumEven);

let sumarr = new Array(sumEven , sumOdd);
console.log(sumarr);

const randomArray = Array();
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.random());
}
console.log(randomArray);

const randomArray2 = Array();
for (let i = 0; i < 5; i++) {
    let temp = Math.random();
    if(!randomArray2.includes(temp)){
        randomArray2.push(temp);
    }
}
console.log(randomArray2);

// Exercise : Level - 2

let length = 12;
let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let randomId = '';

for (let i = 0; i < length; i++) {
  let randomIndex = Math.floor(Math.random() * characters.length);
  randomId += characters.charAt(randomIndex);
}
console.log(randomId);

let hexcode = `0123456789ABCDEF`;
let random =`#`;
for(let i = 0 ; i < 6 ; i++){
    let randomIndex = Math.floor(Math.random() * hexcode.length);
    random += hexcode.charAt(randomIndex); 
}
console.log(hexcode);

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

let randomColor = `rgb(${red},${green},${blue})`;
console.log(randomColor);

const newCountries = new Array();
for (let i = 0; i < countries.length; i++) {
       newCountries.push(countries[i].toUpperCase());
}
console.log(newCountries);

let countryLength = new Array();
for(let i = 0 ; i < countries.length ; i++){
    countryLength.push(countries[i].length  );
}
console.log(countryLength);

const result = [];
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const countryCode = country.slice(0, 3).toUpperCase();
  const countryLength = country.length;
  result.push([country, countryCode, countryLength]);
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}

const filteredCountries = new Array();
for(let i = 0 ; i < countries.length ; i++){
    if(countries[i].includes(`land`)){
        filteredCountries.push(countries[i]);
    }
}
console.log(filteredCountries);

const filteredCountries2 = new Array();
for(let i = 0 ; i < countries.length ; i++){
    if(countries[i].endsWith(`ia`)){
        filteredCountries2.push(countries[i]);
    }
}
console.log(filteredCountries2);

const filteredCountries3 = new Array();
for(let i = 0 ; i < countries.length ; i++){
    if(countries[i].length == 5){
        filteredCountries3.push(countries[i]);
    }
}
console.log(filteredCountries3);

let max = 0;
for(let i = 0 ; i < webTechs.length ; i++){
    if(webTechs[i].length > max){
        max = i;
    }
}
console.log(webTechs[max]);


for(let i = 0 ; i < webTechs.length ; i++){
    console.log(webTechs[i], webTechs[i].length);
}

const answer = [];
for (let i = 0; i < webTechs.length; i++) {
  const tech = webTechs[i];
  const techLength = tech.length;
  answer.push([tech, techLength]);
}
for(x of answer){
    console.log(x);
}

for(webTech of webTechs){
    console.log(webTech);
}

const fruits = ['banana', 'orange', 'mango', 'lemon'];

const reversedFruits = Array();

for(i=fruits.length-1; i>=0; i--){
    reversedFruits.push(fruits[i]);
}

console.log(reversedFruits);

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]


for(element of fullStack){
    for(inner of element){
        console.log(inner);
    }
}


// Exercise : Level - 3
// Already Done Above.


