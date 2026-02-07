// Union type for user ID
let userId: number | string;

userId = 2;
console.log(userId);

userId = "12ic";
console.log(userId);

// Function that RETURNS the value
const getValue = (val: number | string): number | string => {
  return val;
};

// Function demonstrating type narrowing
const formatInput = (a: number | string): number | string => {
  if (typeof a === "string") {
    return a.toUpperCase();
  }
  return a + 10;
};

const result1 = formatInput(1);
const result2 = formatInput("rohit");

console.log(result1);
console.log(result2);

// Use return value correctly
const value1 = getValue(4);
const value2 = getValue("virat");

console.log(value1);
console.log(value2);

// Union array
const arr: (number | string)[] = [1, 2, "rohit", "anirudha"];
console.log(arr);

// any type example (use sparingly)
let anyVar: any;

anyVar = 1;
anyVar = "abd";
anyVar = true;

console.log(anyVar);

// any in function (demonstrates risk)
const processData = (a: any, b: any): any => {
  return a + b;
};

processData(1, "pratik");
