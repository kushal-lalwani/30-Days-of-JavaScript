//Level - 1

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

const set = new Set();

for(let i = 0; i <= 10; i++){
    set.add(i);
}

set.delete(7);
console.log(set);

set.clear();

const arr = ["Java" , "C++" , "Python" , "JavaScript" , "GoLang"];
const arr_set = new Set(arr);
console.log(arr_set);


const countriesMap = new Map();
for(const country of countries){
    countriesMap[country] = country.length;
}

console.log(countriesMap);

// Level - 2

const union = [...a , ...b];
const unionset = new Set(union);
console.log(unionset);

const seta = new Set(a);
const setb = new Set(b);

const intersection = a.filter((elements) => setb.has(elements));
console.log(intersection);

// Ended :|

