interface Animal {
  breed: string;
  name: string;
}

interface SoundMaker {
  makeSound(): void;
}

class Pet implements Animal, SoundMaker {
  constructor(public breed: string, public name: string) {} 

  makeSound(): void {
    console.log(`${this.name} the ${this.breed} says: Woof!`);
  }
} 

const myPet = new Pet("Labrador", "Buddy");
myPet.makeSound(); 