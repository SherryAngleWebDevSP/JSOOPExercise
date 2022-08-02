// Exercise 1
class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(rmHobby) {        

        //  Find the index of rmHobby
        let foundIdx = this.hobbies.indexOf(rmHobby);
        // Use Splice to remove the index value
        this.hobbies.splice(foundIdx, 1);
    }

    greeting() {
        console.log("Hello my friend!");
    }

    // override the Object.protype.toString
    toString() {
        return Object.entries(this).toString();
    }
}



// Exercise 2
class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);

        this.occupation = occupation;
    }
    greeting() {
        console.log("Hello, I am a coder!");
    }
}

// Exercise 3
let coder = new Coder(
"Sherry", 
2, 
"Garland", 
["guitar", "gardening", "reading"],
"Full Stack Web Developer"
);

coder.addHobby("hiking");

console.log(coder);

coder.removeHobby("reading");

console.log(coder);
 
coder.greeting();

console.log(coder.toString())

//Exercise 4
class Calculator {
    result = 0;
    // or....
    // constructor(){
    //  this.result = 0;
    // }
 
    add(a, b) {
        let res;

        if (b == undefined) {
            res = this.result + a;
        } else {
            res = a + b;
        }

        this.result = res;
        return this.result;
        }
    
        subtract(a, b) {
            let res;

            if (b == undefined) {
                res = this.result - a;
            } else {
                res = a - b;
            }

            this.result = res;
            return this.result;
        }

        multiply(a, b) {
            let res;

            if (b == undefined) {
                res = this.result * a;
            }else {
                res = a * b;
            }

            this.result = res;
            return this.result;
        }

        divide(a, b) {
            let res;

            if(b == undefined) {
                res = this.result / a;
            } else {
                res + a / b;
            }

            this.result = res;
            return this.result;
        }
        display() {
            console.log(this.result);
        }
    }

    let calc = new Calculator();

    calc.add(10);
    calc.subtract(2);
    calc.multiply(4);
    calc.divide(2);
    calc.display();
