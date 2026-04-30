type StringOrNumber = string | number;

function printInfo(value: StringOrNumber): void {
  if (typeof value === "string") {
    console.log(`The value is a string: "${value}"`);
  } else if (typeof value === "number") {
    console.log(`The value is a number: ${value}`);
  } else {
    console.log("The value is of an unexpected type.");
  }
}

printInfo("Hello, TypeScript!");
printInfo(42);
// printInfo(true);