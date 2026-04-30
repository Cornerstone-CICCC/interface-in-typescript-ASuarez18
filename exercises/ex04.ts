// type Participant = {
//   name: string;
//   role: string;
// }

// interface AppEvent {
//   date: Date;
//   title: string;
//   participants: Participant[];
// }

// const event1: AppEvent = {
//   date: new Date("2024-07-01"),
//   title: "TypeScript Workshop",
//   participants: [
//     { name: "Alejandro", role: "Developer" },
//     { name: "Sophia", role: "Designer" },
//     { name: "Liam", role: "Project Manager" }
//   ]
// }

interface Participant {
  name: string;
  role: string;
}

type AppEvent = {
  date: Date;
  title: string;
  participants: Participant[];
}

const event1: AppEvent = {
  date: new Date("2024-07-01"),
  title: "TypeScript Workshop",
  participants: [
    { name: "Alejandro", role: "Developer" },
    { name: "Sophia", role: "Designer" },
    { name: "Liam", role: "Project Manager" }
  ]
}

console.log(`Event: ${event1.title}`);
console.log(`Date: ${event1.date.toDateString()}`);
console.log("Participants:");
event1.participants.forEach(participant => {
  console.log(`- ${participant.name} (${participant.role})`);
});