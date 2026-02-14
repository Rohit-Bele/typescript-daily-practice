//OPTIONAL PARAMETER ( ? )
// Parameter may or may not be passed
// Type becomes: string | undefined

function greetOptional(name?: string) {
  // name can be undefined, so we must check
  if (name) {
    console.log("Hello", name);
  } else {
    console.log("Hello Guest (Optional)");
  }
}

greetOptional("Rohit"); // Provided argument
greetOptional();        // No argument → undefined



//  DEFAULT PARAMETER ( = )
// Provides fallback value automatically
// No need to check undefined

function greetDefault(name: string = "Guest") {
  // name always has a value
  console.log("Hello", name, "(Default)");
}

greetDefault("Rohit"); // Uses given value
greetDefault();        // Uses default value



// Practical Example: Discount Calculation
// Comparing Optional vs Default parameter

// Optional parameter version
function calculateOptional(price: number, discount?: number) {
  // discount may be undefined
  if (discount !== undefined) {
    return price - discount;
  }
  return price;
}

console.log("Optional Discount:", calculateOptional(100));
console.log("Optional Discount:", calculateOptional(100, 10));


function calculateDefault(price: number, discount: number = 0) {
  // discount always has a number
  return price - discount;
}

console.log("Default Discount:", calculateDefault(100));
console.log("Default Discount:", calculateDefault(100, 10));




// Optional parameter approach
function createUserOptional(name: string, role?: string) {
  return {
    name,
    role: role ?? "user", // If role is null or undefined → use "user"
  };
}

// Default parameter approach (best practice)
function createUserDefault(name: string, role: string = "user") {
  return {
    name,
    role, // always has value
  };
}

console.log("Optional User:", createUserOptional("Rohit"));
console.log("Default User:", createUserDefault("Rohit"));



