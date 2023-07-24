const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

let[e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

const { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

// Level - 2 & 3


for(const {name,score,skills,age} of users){
    console.log(name,score,skills,age);
}

const beginers = users.filter(user => user.skills.length < 2);
console.log(beginers);

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [fname,skills,jsScore,reactScore] = student; 
console.log(fname, skills, jsScore, reactScore);


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]



const convertArrayToObject = (arr) => {
    const obj = [];
    for(const[fname,skills,score] of arr){
        const user = {fname,skills,score};
        obj.push(user);
    }
    return obj;
}
console.log(convertArrayToObject(students));

const student2 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }


  const { skills: { frontEnd, backEnd, dataBase, dataScience }, ...rest } = student2;

  const newStudent = {
    ...rest,
    skills: {
        frontEnd: [
            ...frontEnd,
            { skill: 'Bootstrap', level: 8 }
        ],
        backEnd: [
            ...backEnd,
            { skill: 'Express', level: 9 }
        ],
        dataBase: [
            ...dataBase,
            { skill: 'SQL', level: 8 }
        ],
        dataScience: [
            ...dataScience,
            'SQL'
        ]
    }
};

console.log(newStudent);


// --x--