// let obj = {
//     firstname : `Kushal`,
//     lastname : `Lalwani`,
//     age : 19,
//     country : `India`,
//     city : `Ahmedabad`
// }

// const JSONobj = JSON.stringify(obj , undefined , 4);
// localStorage.setItem(`JSONobj` , JSONobj);
// console.log(localStorage);

// // LEvel - 2

// let student = {
//     firstname : `Kushal`,
//     lastname : `Lalwani`,
//     age : 19,
//     country : `India`,
//     skills : [`Java`,`JavaScript`,`HTML`,`CSS`]
// };

// const studentJSON = JSON.stringify(student , undefined , 4);
// localStorage.setItem(`Enrolled` , studentJSON);
// console.log(studentJSON);


// Level - 3

const personAccount = {
    firstname : `Kushal`,
    lastname : `Lalwani`,
    incomes : [],
    expenses : [],
    
    addIncome(amount){
        this.incomes.push(amount);
    },

    addExpense(amount){
        this.expenses.push(amount);
    },

    accInfo(){
        return `This account belongs to ${this.firstname} ${this.lastname} with total income : ${this.totalIncome()} and expenses ${this.totalExpense()}`;
    },

    totalIncome(){
        return this.incomes.reduce((sum,income) => sum + income);
    },

    totalExpense(){
        return this.expenses.reduce((sum,expense) => sum + expense);
    }

}
personAccount.addIncome(50000);
personAccount.addIncome(10000);
personAccount.addExpense(15000);
personAccount.addExpense(5000);

console.log(personAccount.accInfo());