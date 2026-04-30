interface Shape {
  calculatePerimeter(): number;
  calculateArea(): number;
}

interface Triangle extends Shape {
  sideA: number;
  sideB: number;
  sideC: number;
}

interface Rectangle extends Shape {
  width: number;
  height: number;
}

interface Circle extends Shape {
  radius: number;
}

interface Square extends Shape {
  side: number;
}

// Interface implementations
const myRectangle: Rectangle = {
  width: 10,
  height: 5,
  calculatePerimeter() { return 2 * (this.width + this.height); },
  calculateArea() { return this.width * this.height; }
};
const myCircle: Circle = {
  radius: 7,
  calculatePerimeter() { return 2 * Math.PI * this.radius; },
  calculateArea() { return Math.PI * Math.pow(this.radius, 2); }
};
const mySquare: Square = {
  side: 4,
  calculatePerimeter() { return this.side * 4; },
  calculateArea() { return this.side * this.side; }
};

// Output results
console.log(`Rectangle Area: ${myRectangle.calculateArea()}`); // 50
console.log(`Circle Perimeter: ${myCircle.calculatePerimeter().toFixed(2)}`); // 43.98
console.log(`Square Area: ${mySquare.calculateArea()}`); // 16