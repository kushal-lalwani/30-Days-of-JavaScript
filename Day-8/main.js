// Level 1


const dog = {};

console.log(dog);

dog.name = "Bolt";
dog.legs = 4;
dog.color = "Golden-Brown";
dog.age = 5;
dog.bark = function () {
  return "woof woof";
}

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

dog.breed = "Golden Retriever";
dog.getDogInfo = () => {
  return `${this.name} is a ${this.breed} of ${this.color} color, He is ${this.age} years old`;
}


// Level 2

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};
for (const user in users) {
  if(users[user].skills.length > 3){
    console.log(users[user]);
  }
}

let count_loggedin = 0;
let count_points = 0;

for (const user in users){
  if(users[user].isLoggedIn == true){
    count_loggedin++;
  }
}

for(const user in users){
  if(users[user].points >= 50){
    count_points++;
  }
}

console.log(count_loggedin);
console.log(count_points);

for(const user in users){
  if(users[user].skills.includes('MongoDB', 'Express', 'React', 'Node')){
    console.log(users[user]);
  }
}

users.Kushal = {
    email: 'kushallalwani@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Java'],
    age: 19,
    isLoggedIn: true,
    points: 70,
}
for(const user of Object.keys(users)){
  console.log(user);
}

// Level - 3

const personAccount = {
  firstName : `Kushal`,
  lastName : `Lalwani`,
  incomes : 5000000,
  expenses : 1200000,
  totalIncome : function (){
      return this.incomes;
  },
  totalExpenses : function(){
      return this.expenses;
  },
  accountInfo : function (){
      return `firstname - ${this.firstName} , lastname - ${this.lastName}`;
  },
  addIncome : function (income){
      this.incomes = this.incomes + income;
      return this.incomes;
      },
  addExpense : function (expense){
      this.expenses = this.expenses + expense;
      return this.expenses;
  },
  accbalance : function(){
      return (this.incomes - this.expenses);
  }

}
const newUsers = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false
  }
];

const products = [
  {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
          { userId: 'fg12cy', rate: 5 },
          { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
  },
  {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
  },
  {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
  }
] 

