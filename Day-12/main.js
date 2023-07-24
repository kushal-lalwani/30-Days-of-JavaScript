const text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`;
const salary = text.match(/[\d]+/g)

const sum = salary.reduce((salaries, summation) => salaries + parseInt(summation), 0);
console.log(sum);

const pointsString = `The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction`;
const pattern = /-?\d+/g;
const matches = pointsString.match(pattern);

const num = matches.map(Number);
num.sort((a,b) => a - b);
const dist = num[num.length - 1] - num[0];
console.log(dist);

const valid = /^[$a-z_][$_0-9a-z]*$/i;
console.log(valid.test(`var`));
console.log(valid.test(`1var`));


// Level -2


const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(paragraph) {
    const words = paragraph.toLowerCase().match(/\b\w+\b/g);
    const wordCounts = words.reduce((counts, word) => {
      counts[word] = (counts[word] || 0) + 1;
      return counts;
    }, {});

    const wordArray = Object.entries(wordCounts).map(([word, count]) => ({ word, count }));
    const topTenWords = wordArray.sort((a, b) => b.count - a.count).slice(0, 10);
  
    return topTenWords;
  }

console.log(tenMostFrequentWords(paragraph))


// Level - 3


const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleaner = /[%#@$&]/g;

const cleaned = sentence.replace(cleaner ,``);
console.log(cleaned);

console.log(tenMostFrequentWords(cleaned).splice(0,3));

// --x--