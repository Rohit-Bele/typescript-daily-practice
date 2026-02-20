export {}; // makes file a module

// Classes Introduction
// Definition: Blueprint to create objects with properties & methods
// Real-world use: Modeling entities like User, Product, Order

class User {
  name: string = "";
  email: string = "";

  displayInfo() {
    console.log(`User: ${this.name}, Email: ${this.email}`);
  }
}

const user1 = new User();
user1.name = "Rohit";
user1.email = "rohit@gmail.com";
user1.displayInfo();


// Constructors
// Definition: Initialize values automatically when object is created
// Real-world use: Creating Product or Account objects

class Product {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const product1 = new Product("Laptop", 50000);
console.log("Product:", product1.title, product1.price);


// Access Modifiers (public, private)
// public → accessible everywhere
// private → only inside class
// Real-world use: Hide sensitive data (password, balance)

class BankAccount {
  public accountHolder: string;
  private balance: number;

  constructor(holder: string, balance: number) {
    this.accountHolder = holder;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  showBalance() {
    console.log(`Balance: ${this.balance}`);
  }
}

const acc = new BankAccount("Rohit", 1000);
acc.deposit(500);
acc.showBalance();
// acc.balance ❌ Error (private protects sensitive data)


// Protected Modifier
// Accessible inside class and subclasses only
// Real-world use: Employee hierarchy, role-based systems

class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  showSalary() {
    console.log(`Manager Salary: ${this.salary}`);
  }
}

const manager = new Manager(50000);
manager.showSalary();
// manager.salary ❌ not accessible outside


// Getters and Setters
// Control read/write access + validation
// Real-world use: Form validation, controlled profile updates

class Person {
  private _age: number = 0;

  // Getter → read private value
  get age() {
    return this._age;
  }

  // Setter → validate before updating
  set age(value: number) {
    if (value > 0) {
      this._age = value;
    } else {
      console.log("Invalid age");
    }
  }
}

const person = new Person();
person.age = 25; // setter called
console.log("Age:", person.age); // getter called
person.age = -5; // validation fails


// Static Members
// Belong to class, not object
// Real-world use: Utility helpers, global counters

class MathUtil {
  static PI: number = 3.14;

  static square(num: number): number {
    return num * num;
  }
}

console.log("PI:", MathUtil.PI);
console.log("Square:", MathUtil.square(4));


// Abstract Classes
// Cannot create object directly
// Used as base blueprint
// Real-world use: Payment systems, vehicle systems, notification services

abstract class Payment {
  abstract pay(amount: number): void;
}

class CreditCardPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

const payment = new CreditCardPayment();
payment.pay(1000);
// const p = new Payment(); ❌ cannot instantiate abstract class

