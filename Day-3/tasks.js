// Exercise: Level-1

let firstName = 'Kushal';
let lastName = 'Lalwani';
let country = 'India';
let city = 'Ahmedabad';
let age = 18;
let  isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log('10' === 10);
console.log(parseInt('9.8') === 10);

console.log((4*4 === 16) && (5**2 == 25));
console.log(10 == '10');
console.log(true == 1);

console.log(!(false == true) && !(true == true));
console.log('' == null);
console.log(5 === '5');

console.log(4 > 3);                //true
console.log(4 >= 3);               //true
console.log(4 < 3)                 //false
console.log(4 <= 3)                //false
console.log(4 == 4)                //true
console.log(4 === 4)               //true
console.log(4 != 4)                //false
console.log(4 !== 4)               //false
console.log(4 != '4')              //false
console.log(4 == '4');             //true
console.log(4 === '4');            //false

console.log('python'.length != 'jargon'.length);

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true 
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true

console.log(!'python'.includes('on') && !'jargon'.includes('on')); //false

let date_ob = new Date();
console.log(date_ob.getFullYear());
console.log(date_ob.getMonth());
console.log(date_ob.getDate());
console.log(date_ob.getDay());
console.log(date_ob.getHours());
console.log(date_ob.getMinutes());
console.log(date_ob.getTime())

// Exercise: Level-2

let base = prompt('Enter base of triangle');
let height = prompt('Enter height of traingle');
console.log('Area of the triangle is:'+ 0.5 * base * height);

let a = Number(prompt('Enter Side 1 of triangle'));
let b = Number(prompt('Enter Side 2 of triangle'));
let c = Number(prompt('Enter Side 3 of triangle'));
console.log('Perimeter of Triangle = '+(a+b+c));

let length = Number(prompt('Enter the value of length of rectangle'));
let width = Number(prompt('Enter the value of width of rectangle'));
console.log('Area of the rectangle is:'+ length * width);
console.log('Perimeter of the rectangle is:'+ 2 * (length + width));

let radius = Number(prompt('Enter Radius of Circle'));
console.log('Area of Circle = '+(Math.PI*radius*radius));
console.log('Circumference of Circle = '+(2*Math.PI*radius));

let x;
let  y = 0; 
x = (2 + y)/2;

let x_intercept = x;

let x_,y_;
x_ = 0;
y_ = 2 * x_ - 2;
let y_intercept = y_;
let m = -(y_intercept/x_intercept);
console.log('Slope = '+m)
console.log();

let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log('Slope = '+ slope);

console.log(m == slope);

let val = Number(prompt('Enter x'));
console.log('The value of y is:', Math.pow(val,2) + 6 * val + 9);

let hours = Number(prompt('Enter hours'));
let ratePerHour = Number(prompt('Enther rate per hour'));
console.log('Total earning:'+ hours * ratePerHour);

firstName.length > lastName.length
    ?console.log('Your first name is longer than last name')
    :console.log('Your first name is not longer than last name');

let name = prompt(`Enter your name`);
name.length > 7
    ?console.log('Your name is long')
    :console.log('Your name is short');

let myAge = 250;
let yourAge = 25;
myAge > yourAge
    ?console.log('I am '+(myAge-yourAge)+' years older than you')
    :console.log('I am '+(yourAge-myAge)+' years younger than you');


let birthYear = Number(prompt('Enter your birth year'));
(date_ob.getFullYear() - birthYear) >= 18
?console.log("You're allowed to drive")
:console.log('wait for'+ (today.getFullYear - birthYear)+ 'to drive');

console.log(`${date_ob.getFullYear()}-${date_ob.getMonth()}-${date_ob.getDate()} ${date_ob.getHours()}:${date_ob.getMinutes()}`);
console.log(`${date_ob.getDate()}-${date_ob.getMonth()}-${date_ob.getFullYear()} ${date_ob.getHours()}:${date_ob.getMinutes()}`);