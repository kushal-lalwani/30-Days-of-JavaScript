//Exercises: Level 1

let age = Number(prompt("Enter Your Age : "));
if(age >= 18){
    console.log('You are old enough to drive');
}
else{
    console.log(`You are left with ${18 - age} years to drive`);
}

let myAge = 18;
let yourAge = Number(prompt(`What's your age:`));

if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`);
}
else if (myAge < yourAge) {
    console.log(`You are ${yourAge - myAge} years older than me`);
}
else {
    console.log(`We have lived the same number of years :)`);
}

let a = 4;
let b = 3;

a > b
? console.log(`a is greater than b`)
: console.log(`a is smaller than b`);

if(a > b){
    console.log(`a is greater than b`);
}
else{
    console.log(`a is smaller than b`);
}

let num = Number(prompt(`Enter a number: `));
if(num % 2 === 0){
    console.log(`${num} is even`);
}
else{
    console.log(`${num} is odd`);
}

//Exercises: Level 2

let score = Number(prompt(`Enter your score:`));

if (score >= 80 && score <= 100) {
    console.log(`Grade: A`);
}
else if (score >= 70 && score < 80) {
    console.log(`Grade: B`);
}
else if (score >= 60 && score < 70) {
    console.log(`Grade: C`);
}
else if (score >= 50 && score < 60) {
    console.log(`Grade: D`);
}
else if (score >= 0 && score < 50) {
    console.log('Grade: F');
}
else {
    console.log(`Enter a Valid Score`);
}

let month = prompt(`Enter Month: (eg: "May , March ....")`);

if(month == `September` || month == `November` || month == `October`){
    console.log(`Autumn Season`);
}
else if(month == `December` || month == `January` || month == `February`){
    console.log(`Winter Season`);
}
else if(month == `March` || month == `April` || month == `May`){
    console.log(`Autumn Season`);
}
else{
    console.log(`Summer Season`);
}

let day = prompt("What's the day today").toLowerCase();
if (day == `saturday` || day == `sunday`) {
    console.log(`${day} is weekend day`);
}
else {
    console.log(`${day} is working day`);
}

let monthInput = prompt(`Enter a month: `).toLowerCase();
let year = Number(prompt(`Enter Year: `));

switch (monthInput) {
    case `january`:
        console.log(`${monthInput} has 31 days`);
        break;
    case `march`:
        console.log(`${monthInput} has 31 days`);
        break;
    case `may`:
        console.log(`${monthInput} has 31 days`);
        break;
    case `july`:
        console.log(`${monthInput} has 31 days`);
        break;
    case `august`:
        console.log(`${monthInput} has 31 days`);
        break;
    case `october`:
        console.log(`${monthInput} has 31 days`);
        break;
    case `december`:
        console.log(`${monthInput} has 31 days`);
        break;            
    case `february`:
        if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
            console.log(`${monthInput} has 28 days`);
        }
        else{
            console.log(`${monthInput} has 29 days`);
        }
        break;
    case `april`:
        console.log(`${monthInput} has 30 days`);
        break;                    
    case `june`:
        console.log(`${monthInput} has 30 days`);
        break;          
    case `september`:
        console.log(`${monthInput} has 30 days`);
        break;          
    case `november`:
        console.log(`${monthInput} has 30 days`);
        break;             
        default:
            console.log(`Enter valid Input`)
        break;
}