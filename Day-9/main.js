// Level - 1

/* 
filter: filters out elements according to given contidion and returns a new array.
foreach : iterates through each element of an array.
map : iterates through each element of an array and returns a new array.
reduce: iterates through each element of an array and returns a single value after operations.
*/


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


let callback = (Element) => {
    console.log(Element);
}

countries.forEach(callback); 
names.forEach(callback);
numbers.forEach(callback);
products.forEach(callback);

const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

const country_length = countries.map(clength => clength.length);
console.log(country_length);

const squares = numbers.map(function(num){
    return num*num;
});
console.log(squares);

const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

const prices = products.map(product => product.price);
console.log(prices);

const countriesWithLand = countries.filter((country) => (country.endsWith(`land`)|| country.endsWith(`Land`)));
console.log(countriesWithLand);

const countriesWithSixChars = countries.filter((country) => country.length === 6);
console.log(countriesWithSixChars);

const E_countries = countries.filter((country) => country.startsWith(`E`));
console.log(E_countries);

function getStringLists(arr){
  return arr.filter((items) => typeof items === `string`);
}

const summation = numbers.reduce((acc , cur) => acc + cur);
console.log(summation);

const concatentation = countries.reduce((acc , currval , currin) => {
  if(currin === countries.length-1){
    return `${acc}and ${currval} are north European countries.`;
  }
  return `${acc} ${currval},`
});
console.log(concatentation);

const check = names.some((name) => name.length > 7);
console.log(check);

const check2 = countries.every((country)=> country.includes(`land`));
console.log(check2);

const find1 = countries.findIndex((country) => country === `Norway`);
console.log(find1);

const find2 = countries.findIndex((country) => country === `Russia`);
console.log(find2);

// Level - 2

const totalPrice = products
    .filter(product => product.price)
    .map(product => product.price)
    .reduce((acc, price) => acc + price, 0);
console.log(totalPrice);

const cost_sum = products.reduce((acc, product) => {
  if (product.price) {
      return acc + product.price;
  } else {
      return acc;
  }
}, 0);
console.log(cost_sum);

function countStartingLetters(countries) {
  const letterCount = {};
  countries.forEach(country => {
      const firstLetter = country[0].toUpperCase();
      if (letterCount[firstLetter]) {
          letterCount[firstLetter]++;
      } else {
          letterCount[firstLetter] = 1;
      }
  });
  return Object.entries(letterCount).map(entry => ({
      letter: entry[0],
      count: entry[1]
  }));
}
console.log(countStartingLetters(countries));


function getFirstTenCountries() {
  return countries.slice(0, 10);
}
console.log(getFirstTenCountries());


function getLastTenCountries() {
  return countries.slice(-10);
}
console.log(getLastTenCountries());
