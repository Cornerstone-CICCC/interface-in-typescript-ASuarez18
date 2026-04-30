interface Address {
  street: string;
  zipCode: string;
}

interface User {
  name: string;
  address?: Address;
}

const user1 : User = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    zipCode: "12345"
  }
}

console.log("Zip Code:", user1.address?.zipCode);