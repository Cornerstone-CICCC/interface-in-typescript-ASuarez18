type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type Adminemployee = Admin & Employee;

const adminEmployee1: Adminemployee = {
  name: "Alice",
  privileges: ["manage-users", "edit-content"],
  startDate: new Date("2024-01-15")
}

console.log(`Admin Employee: ${adminEmployee1.name}`);
console.log(`Privileges: ${adminEmployee1.privileges.join(", ")}`);
console.log(`Start Date: ${adminEmployee1.startDate.toDateString()}`);

