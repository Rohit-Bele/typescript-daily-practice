


// TASK 1: unknown vs any

// `unknown` can hold any value,
// but must be narrowed before use
let data: unknown;

data = "rohit";
data = 25;

// Type narrowing using typeof
if (typeof data === "string") {
  console.log(data.toUpperCase()); // safe
}

if (typeof data === "number") {
  console.log(data.toFixed(2)); // safe
}

// TASK 3: try / catch with unknown


// Function to safely parse JSON
function parseJSON(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error occurred");
    }
    return null;
  }
}

// Example usage
const parsedResult = parseJSON('{"name":"Rohit"}');

// Narrowing before use
if (typeof parsedResult === "object" && parsedResult !== null) {
  console.log(parsedResult);
}




// TASK 4: never type with Discriminated Union


// Admin type
type Admin = {
  role: "admin";
  permissions: string[];
};

// User type
type User = {
  role: "user";
  email: string;
};

// Guest type
type Guest = {
  role: "guest";
};

// Union type
type Person = Admin | User | Guest;

// Function using switch + never for exhaustiveness
function describePerson(person: Person): string {
  switch (person.role) {
    case "admin":
      return "Admin user";

    case "user":
      return "Normal user";

    case "guest":
      return "Guest user";

    default:
      // Ensures all cases are handled
      const check: never = person;
      throw new Error("Unhandled role");
  }
}

// Example usage
console.log(
  describePerson({ role: "admin", permissions: ["read", "write"] })
);
console.log(
  describePerson({ role: "user", email: "user@example.com" })
);
console.log(
  describePerson({ role: "guest" })
);
