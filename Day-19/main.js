function increase(){
    let sum = 0;
    let count = 0;
    function one(){
        count++;
        sum = sum + count;
        return sum;
    }
    return one;
}

const oneinc = increase();
console.log(oneinc());
console.log(oneinc());
console.log(oneinc());
console.log(oneinc());


// Level - 2


function outerFunction() {
    let outerVariable = 'I am from outer function';
  
    function innerFunction1() {
      console.log(outerVariable + ' and I am inner function 1.');
    }
  
    function innerFunction2() {
      console.log(outerVariable + ' and I am inner function 2.');
    }
  
    function innerFunction3() {
      console.log(outerVariable + ' and I am inner function 3.');
    }
  
    return {
      innerFunc1: innerFunction1,
      innerFunc2: innerFunction2,
      innerFunc3: innerFunction3,
    };
  }
  
  const closures = outerFunction();
  
  closures.innerFunc1();
  closures.innerFunc2();
  closures.innerFunc3();


// Level - 3


  function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];

    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }

    function totalIncome() {
        return incomes.reduce((total, income) => total + income.amount, 0);
      }      

    function totalExpense() {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    function accountInfo() {
        return `This account belongs to ${firstName} ${lastName} , Total Income: $${totalIncome()} , Total Expenses: $${totalExpense()}`;
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        addIncome,
        addExpense,
        accountInfo,
        accountBalance
    };
}

const acc_holder = personAccount("Kushal", "Lalwani");

acc_holder.addIncome("Base Pay", 60000);
acc_holder.addIncome("Incentives", 12000);
acc_holder.addExpense("Food and Entertainment", 5000);
acc_holder.addExpense("Rent", 15000);
console.log(acc_holder.accountBalance());
console.log(acc_holder.accountInfo());
