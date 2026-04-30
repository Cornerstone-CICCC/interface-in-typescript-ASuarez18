let userInput: string | null = null;

const storedData = userInput ?? "Please enter something..."; // ?? is the nullish coalescing operator

console.log(storedData);