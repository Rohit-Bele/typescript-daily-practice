// TASK 1: Basic Union + Narrowing

// Value can be string OR number
type Value = string | number;

// Function must return string in all cases
function formatValue(val: Value): string {
  if (typeof val === "string") {
    return val.toUpperCase();
  } else {
    return val.toFixed(2);
  }
}

// Example usage
console.log(formatValue("rohit"));
console.log(formatValue(12.345));



// TASK 2: Literal Union + Switch

// Restrict allowed order statuses
type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

function handleOrder(status: OrderStatus): string {
  switch (status) {
    case "pending":
      return "Order is being processed.";

    case "shipped":
      return "Order has been shipped.";

    case "delivered":
      return "Order delivered successfully.";

    case "cancelled":
      return "Order has been cancelled.";

    default:
      // Exhaustiveness check
      const check: never = status;
      throw new Error("Unhandled order status");
  }
}

// Example usage
console.log(handleOrder("pending"));
console.log(handleOrder("delivered"));



// TASK 3: Discriminated Union

type Success = {
  type: "success";
  data: string;
};

type Failure = {
  type: "failure";
  error: string;
};

type Result = Success | Failure;

function handleResult(result: Result): string {
  if (result.type === "success") {
    return `Success: ${result.data}`;
  } else {
    return `Error: ${result.error}`;
  }
}

// Example usage
console.log(handleResult({ type: "success", data: "User created" }));
console.log(handleResult({ type: "failure", error: "Invalid input" }));



// TASK 4: API Response Union + Exhaustiveness

type ApiResponse =
  | { status: "loading" }
  | { status: "success"; data: string[] }
  | { status: "error"; message: string };

function processResponse(response: ApiResponse): string {
  switch (response.status) {
    case "loading":
      return "Loading data...";

    case "success":
      return `Received ${response.data.length} items.`;

    case "error":
      return `Error occurred: ${response.message}`;

    default:
      // Ensures all future cases are handled
      const check: never = response;
      throw new Error("Unhandled API response type");
  }
}

// Example usage
console.log(processResponse({ status: "loading" }));
console.log(processResponse({ status: "success", data: ["A", "B"] }));
console.log(processResponse({ status: "error", message: "Network issue" }));
