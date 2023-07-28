const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const countries = fetch(countriesAPI).then(response => response.json()).then(data => {
    data.forEach((country) => {
    console.log('Country:', country.name);
    console.log('Capital:', country.capital);
    console.log('Languages:', country.languages.map(lang => lang.name).join(', '));
    console.log('Population:', country.population);
    console.log('Area:', country.area);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    });
}).catch(err => {console.error(err);});

console.log(countries);


//  Level - 2

let catNames = [];

const cats = fetch(catsAPI).then(response => response.json()).then(data => {
    catNames = data.map(cat => cat.name);
    console.log(catNames)
    ;})
    .catch(err => {console.error(err);
});


// Level - 3


fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    const catWeights = data.map((cat) => cat.weight.metric.split(' - '));
    const totalCats = catWeights.length;
    const totalWeights = catWeights.reduce(
      (sum, weight) => sum + ((parseInt(weight[0]) + parseInt(weight[1])) / 2),
      0
    );
    const averageWeight = totalWeights / totalCats;
    console.log(averageWeight.toFixed(2));
  })
  .catch((error) => {
    console.error(error);
  });




  fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => b.area - a.area);
      const largestCountries = data.slice(0, 10).map((country) => country.name);
      console.log(largestCountries);
    })
    .catch((error) => {
      console.error(error);
    });



    fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    const officialLanguages = data.flatMap((country) => country.languages.map((language) => language.name));
    const totalOfficialLanguages = new Set(officialLanguages).size;
    console.log(totalOfficialLanguages);
  })
  .catch((error) => {
    console.error(error);
  });

  
