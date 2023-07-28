class Animal{
    constructor(name,age,color,legs){
        this.name = name;
        this.age= age;
        this.legs = legs;
        this.color = color;
    }

    know_animal(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.color);
        console.log(this.legs);

    }

}
class Dog extends Animal{
    constructor(name,age,color,legs,breed){
        super(name,age,color,legs);
        this.breed = breed;
    }
    shakeHand(){
        console.log(`Shakes Hand..`);
    }
}
class Cat extends Animal{
    constructor(name,age,color,legs,breed){
        super(name,age,color,legs);
        this.breed = breed;
    }
    behaveYourself(){
        console.log(`still misbehaves`);
    }
}

const dog = new Dog(`Genie` , 5 ,`white`, 4 , `Labrador`);
dog.know_animal();
dog.shakeHand();
const cat = new Cat(`Billie`, 3 , `brown` , 4 , `British ShortHair`);
cat.behaveYourself();


// Level - 2 - Overiding


class Cow extends Animal{
    constructor(name,age,color,legs,breed){
        super(name,age,color,legs);
        this.breed = breed;
    }
    know_animal(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.color);
        console.log(this.legs);
        console.log(this.breed);
    }
}

const cow = new Cow(`Gita` , 7 , `brown` , 4 , `Tharparkar`);
cow.know_animal();

// Level - 3

class statistics {
    constructor(sample) {
        this.sample = sample;
    }

    mean() {
        const sum = this.sample.reduce((acc, val) => acc + val, 0);
        return sum / this.sample.length;
    }
    min() {
        return Math.min(...this.sample);
    }

    max() {
        return Math.max(...this.sample);
    }

    count() {
        return this.sample.length;
    }
    freqDist() {
        const counts = {};
        for (const value of this.sample) {
            if (!counts[value]) {
                counts[value] = 1;
            } else {
                counts[value]++;
            }
        }
        return counts;
    }
    range() {
        const sorted = this.sample.sort((a, b) => a - b);
        return sorted[this.sample.length - 1] - sorted[0];
    }
    sum(){
        const sum = this.sample.reduce((acc, val) => acc + val, 0);
        return sum;
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const sample = new statistics(ages);
console.log(sample.mean());
console.log('Count:', sample.count());
console.log('Sum: ', sample.sum());
console.log('Min: ', sample.min());
console.log('Max: ', sample.max());
console.log('Range: ', sample.range());
console.log('Mean: ', sample.mean());
console.log('Frequency Distribution: ',sample.freqDist());