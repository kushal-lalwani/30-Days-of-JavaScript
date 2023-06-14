// Exercise: Level - 1

let challenge = '30 Days Of JavaScript';

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase);
console.log(challenge.toLowerCase);
console.log(challenge.substring(0,2));
console.log(challenge.substring(3,challenge.length));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));

let techFirms = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(techFirms.split(", "));

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));

let spacedstr = ' 30 Days Of JavaScript ';
spacedstr = spacedstr.trim(" ");

console.log(spacedstr);
console.log(spacedstr.startsWith("30"));
console.log(spacedstr.endsWith("JavaScript"));

console.log(spacedstr.match(/a/g));

let days = "30 Days of";
let language = "JavaScript";

console.log(days.concat(" "+language));
console.log(challenge.repeat(2));

// Exercise: Level - 2

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

console.log(typeof '10'); 
console.log(typeof parseInt('10'));

console.log(parseFloat('9.8') == 10);
console.log(Math.ceil(parseFloat('9.8')) == 10);

console.log("Python".includes("on"));
console.log("Jargon".includes("on"));

console.log(`I hope this course is not full of jargon`.includes('jargon'));

console.log(Math.floor(Math.random() * 101));
console.log(50 + Math.floor(Math.random() * 51));
console.log(Math.floor(Math.random() * 256));

console.log('1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125');

console.log(sentence.slice(31,54));

// Exercise: Level-3

console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/g));
console.log(sentence.match(/ because/g));

let text = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let regEx = /\w+/g;

console.log(text.match(regEx).join(''));

let salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let salary_array = salary.match(/\d+/g);

console.log(parseInt((salary_array[0]*12)) + parseInt(salary_array[1]) + parseInt((salary_array[2]*12)));


// --x--