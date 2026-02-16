export {}; // make this file a module

// Classes Introduction
// Basic class with properties and method

class User {
  name: string="";
  age: number=0;

  greet() {
    console.log(`Hello, my name is ${this.name} and age is ${this.age}`);
  }
}

const u1 = new User();
u1.name = "Rohit";
u1.age = 22;
u1.greet();


// =====================================================
// 2️⃣ Constructor
// Initialize properties when object is created
// =====================================================

class UserWithConstructor {
  name: string;
  age: number;

  // constructor runs automatically on object creation
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name}, age ${this.age}`);
  }
}

const u2 = new UserWithConstructor("Virat", 35);
u2.greet();


// =====================================================
// 3️⃣ Access Modifiers (public, private)
// public → accessible everywhere (default)
// private → only inside the class
// =====================================================

class BankAccount {
  public accountHolder: string; // accessible outside
  private balance: number;      // not accessible outside

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
// console.log(acc.balance); ❌ Error: private property


// =====================================================
// 4️⃣ Protected Modifier
// protected → accessible inside class + subclasses
// =====================================================

class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  showSalary() {
    // allowed because subclass can access protected
    console.log(`Manager Salary: ${this.salary}`);
  }
}

const mgr = new Manager(50000);
mgr.showSalary();
// console.log(mgr.salary); ❌ Error: protected not accessible outside


// =====================================================
// 5️⃣ Getters and Setters
// Control read/write access to private data
// =====================================================

class Person {
  private _age: number = 0;

  // getter to read age
  get age() {
    return this._age;
  }

  // setter to update age with validation
  set age(value: number) {
    if (value > 0) {
      this._age = value;
    } else {
      console.log("Invalid age");
    }
  }
}

const p = new Person();
p.age = 25;      // calls setter
console.log(p.age); // calls getter
p.age = -5;      // invalid value


// =====================================================
// 6️⃣ Static Members
// Belong to class itself, not object
// Access using ClassName.member
// =====================================================

class MathUtil {
  static PI: number = 3.14;

  static square(num: number): number {
    return num * num;
  }
}

console.log("PI:", MathUtil.PI);
console.log("Square:", MathUtil.square(5));


// =====================================================
// 7️⃣ Abstract Classes
// Cannot create object directly
// Must be extended & implement abstract methods
// =====================================================

abstract class Shape {
  // abstract method (no implementation)
  abstract area(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // must implement abstract method
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(5);
console.log("Circle Area:", c.area());

// const s = new Shape(); ❌ Error: cannot instantiate abstract class


/*
========================================================
Summary:
- Classes: blueprint for objects
- Constructor: initialize values on creation
- public/private: control visibility
- protected: accessible in subclass
- getters/setters: controlled access + validation
- static: class-level members (no object needed)
- abstract: base class blueprint, must be extended
========================================================
*/
