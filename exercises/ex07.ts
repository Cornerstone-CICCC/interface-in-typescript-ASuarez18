interface Bird {
  breed: "bird";
  wingSpan: number;
}

interface Horse {
  breed: "horse";
  topSpeed: number;
}

type Animal1 = Bird | Horse;

function moveAnimal(animal: Animal1): void {
  switch (animal.breed) {
    case "bird":
      console.log("The bird is flying gracefully with a wingspan of " + animal.wingSpan + "cm.");
      break;
    case "horse":
      console.log("The horse is galloping at a top speed of " + animal.topSpeed + "km/h.");
      break;
  }
}

const myFalcon: Bird = { breed: "bird", wingSpan: 100 };
const myStallion: Horse = { breed: "horse", topSpeed: 60 };

moveAnimal(myFalcon);  
moveAnimal(myStallion);