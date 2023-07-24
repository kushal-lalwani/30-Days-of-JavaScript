const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]

  console.table(countries);

  for(let country of countries){
    console.table(country);
  }

  console.group(`Group`);
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.groupEnd(`Group`)


  // Levek - 2

  console.assert(10 > 2 * 10 , `falsy statement`);

  console.warn(`This is a warning!`);

  console.error(`This is an error!`);

  // Level - 3


  const nums = [10 , 20 , 30 , 40 , 50];

  console.time(`For Loop`);
  for(let i = 0 ; i < nums.length ; i++){
    nums[i] = nums[i]*2;
  }
  console.timeEnd(`For Loop`);

  console.time(`For of Loop`);
  for (let number of nums) {
    number = number * 2;
  }
  console.timeEnd(`For of Loop`);

  let count = 0
  console.time(`While loop`);
  while(count != nums.length){
    nums[count] = nums[count] * 2;
    count++;
  }
  console.timeEnd(`While loop`);


  console.time(`For each Loop`);
  nums.forEach(element => {
    element = element * 2;    
  });
  console.timeEnd(`For each Loop`);

