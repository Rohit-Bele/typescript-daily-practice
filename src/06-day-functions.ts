type Operation = "add" | "sub" | "mul" | "div";

const calculate = (
  a: number,
  b: number,
  operation: Operation
): number => {
  
  switch (operation) {
    case "add":
      return a + b;

    case "sub":
      return a - b;

    case "mul":
      return a * b;

    case "div":
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;

    default:
      const _exhaustiveCheck: never = operation;
      return _exhaustiveCheck;
  }
};

console.log("Addition:", calculate(10, 52, "add"));
console.log("Subtraction:", calculate(10, 52, "sub"));
console.log("Multiplication:", calculate(10, 52, "mul"));
console.log("Division:", calculate(10, 52, "div"));
