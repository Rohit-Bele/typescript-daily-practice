// Demonstrates TypeScript discriminated unions and type narrowing
// using a payment processing example

// Step 1: Define types

// Card payment type
type CardPayment = {
  method: "card";          // discriminant property
  cardNumber: string;
  cvv: number;
};

// UPI payment type
type UPIPayment = {
  method: "upi";           // discriminant property
  upiId: string;
};

// Cash payment type
type CashPayment = {
  method: "cash";          // discriminant property
  amount: number;
};

// Step 2: Union type

// Payment can be one of the defined payment methods
type Payment = CardPayment | UPIPayment | CashPayment;

// Step 3: Process payment


// Uses type narrowing based on the discriminant property `method`
function processPayment(payment: Payment): string {
  switch (payment.method) {
    case "card":
      // payment is narrowed to CardPayment
      return "Processing card payment";

    case "upi":
      // payment is narrowed to UPIPayment
      return "Processing UPI payment";

    case "cash":
      // payment is narrowed to CashPayment
      return "Processing cash payment";

    default:
      // Exhaustiveness check (safety for future changes)
      const _exhaustiveCheck: never = payment;
      return _exhaustiveCheck;
  }
}

// Example usage

console.log(
  processPayment({ method: "card", cardNumber: "1234-5678", cvv: 111 })
);

console.log(
  processPayment({ method: "upi", upiId: "user@upi" })
);

console.log(
  processPayment({ method: "cash", amount: 500 })
);
