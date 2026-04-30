const inpuntElement = document.getElementById("user-input") as HTMLInputElement;

if (inpuntElement) {
  const userInput = inpuntElement as HTMLInputElement;
  userInput.value = "Hello, TypeScript!";

  console.log(`User input value: ${userInput.value}`);
}