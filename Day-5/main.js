// Exercise: Level-1 

const arr1 = new Array();
const arr2 = [1,2,3,4,5,6];
console.log(arr1.length);
console.log(arr2.length);

console.log(arr2[0]);
console.log(arr2[(arr2.length-1)]);
console.log(arr2[Math.floor(arr2.length/2)]);

let mixedDataTypes = [1 , `Kushal` , 'a' , 9.8 , null , true];
console.log(mixedDataTypes.length);

let itCompanies = [`Facebook` , `Google` , `Microsoft`,  `Apple `,`IBM`, `Oracle`,`Amazon`];
console.log(itCompanies.length);
console.log(itCompanies);
console.log(itCompanies[0]);
console.log(itCompanies[(itCompanies.length-1)]);
console.log(itCompanies[Math.floor(itCompanies.length/2)]);

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i]=itCompanies[i].toUpperCase();
    console.log(itCompanies[i]);
}

console.log(`${itCompanies.slice(0, itCompanies.length - 1).toString()} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);

let company = `Netflix`;
itCompanies.includes(company) ?console.log(`Company exists`) : console.log(`Company not found.`);

itCompanies.sort();
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0 , 3));
console.log(itCompanies.slice(itCompanies.length-3));
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2) , Math.floor(itCompanies.length / 2)+1));

console.log(itCompanies.shift());
console.log(itCompanies.pop());
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);


// Exercise: Level-2 


const countries = require("./countries");
const webTechs = require("./web_techs");

console.log(countries);
console.log(webTechs);

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/[^\w\s]/g, '');
const words = text.split(` `);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift(`Meat`);
shoppingCart.pop();

if (shoppingCart[0] != 'Meat') {
    shoppingCart.unshift('Meat');
}

if (shoppingCart[shoppingCart.length - 1] != 'Sugar') {
    shoppingCart.push('Sugar');
}

shoppingCart.splice(shoppingCart.indexOf(`Honey`), 1);
console.log(shoppingCart);

shoppingCart[shoppingCart.indexOf(`Tea`)]= `Green Tea`;
console.log(shoppingCart);

countries.includes(`Ethiopia`) 
? console.log(`ETHIOPIA`)
: console.log(countries.push(`Ethopia`));

webTechs.includes(`Sass`) 
? console.log(`Sass is a CSS preprocess`)
: console.log(countries.push(`Sass`));

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)


//Exercise: Level-3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(`Min: ${ages[0]}`, `Max: ${ages[ages.length - 1]}`);
console.log(ages[Math.floor(ages.length / 2)]);

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
}
console.log(`Average: `+sum / ages.length);

console.log(Math.abs(ages[ages.length - 1] - sum / ages.length) == Math.abs(ages[0] - sum / ages.length));
console.log(countries.slice(0, 10));
console.log(countries[Math.floor(countries.length / 2)]);

if(countries.length % 2 == 0){
    console.log(`First Array: `+countries.slice(0, countries.length / 2) + `Second array: `+ countries.slice(countries.length / 2));
}
else{
        console.log(`First Array: `+countries.slice(0, Math.ceil(countries.length / 2)) + `Second array: `+  countries.slice(Math.ceil(countries.length / 2)));
    }


