export {}; // Prevents duplicate global scope errors

type Product = {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
};

const product: Product = {
  id: 1,
  title: "Books",
  price: 50,
  inStock: true,
};

console.log("Product Title:", product.title);


// Duck Typing / Structural Typing
type Car = {
  brand: string;
  model: string;
};

const myCar = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2024,
};

function printCar(car: Car) {
  console.log("Car:", car.brand, car.model);
}

printCar(myCar);


// Partial<T>
type Profile = {
  username: string;
  email: string;
  bio: string;
};

let profile: Profile = {
  username: "Rohit",
  email: "rohit@gmail.com",
  bio: "Full Stack Developer",
};

function updateProfile(data: Partial<Profile>) {
  profile = { ...profile, ...data };
}

updateProfile({ email: "newemail@gmail.com" });
console.log("Updated Profile:", profile);


// Required<T>
type DraftOrder = {
  productId?: number;
  quantity?: number;
};

function placeOrder(order: Required<DraftOrder>) {
  console.log("Order placed:", order.productId, order.quantity);
}

placeOrder({ productId: 122, quantity: 3 });


// Pick<T>
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type UserPreview = Pick<User, "name" | "email">;

const preview: UserPreview = {
  name: "Rohit",
  email: "rohit@gmail.com",
};

console.log("User Preview:", preview);


// Omit<T>
type SafeUser = Omit<User, "password">;

const safeUser: SafeUser = {
  id: 1,
  name: "Virat",
  email: "virat@gmail.com",
};

console.log("Safe User:", safeUser);


// Partial + Pick
type EditableUserFields = Pick<User, "name" | "email">;
type UpdateUser = Partial<EditableUserFields>;

const updateData: UpdateUser = {
  name: "Updated Rohit",
};

console.log("Update Data:", updateData);
