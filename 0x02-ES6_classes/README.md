## README: Understanding JavaScript ES6 Features

### Table of Contents
1. [Symbols](#symbols)
2. [Defining a Class](#defining-a-class)
3. [Adding Methods to a Class](#adding-methods-to-a-class)
4. [Static Methods in Classes](#static-methods-in-classes)
5. [Extending a Class](#extending-a-class)
6. [Metaprogramming and Symbols](#metaprogramming-and-symbols)

---

### Symbols
#### What are Symbols?
Symbols are a new primitive data type introduced in ES6. They are unique and immutable and are often used to create unique property keys for objects.

#### Key Features
- **Unique**: Each Symbol is unique, even if they have the same description.
- **Immutable**: The value of a Symbol cannot be changed after it is created.
- **Hidden**: Symbols are not included in standard property enumerations (like `for...in` or `Object.keys`).

#### Creating a Symbol
```javascript
let sym1 = Symbol();
let sym2 = Symbol('description');
```

#### Using Symbols as Property Keys
```javascript
let mySymbol = Symbol('mySymbol');
let obj = {};

obj[mySymbol] = 'value';

console.log(obj[mySymbol]); // Output: value
```

#### Real-World Use Case
Symbols are particularly useful in large projects or libraries to ensure that property names do not conflict.

### Defining a Class
A class in JavaScript is a blueprint for creating objects with predefined properties and methods.

#### Syntax
```javascript
class MyClass {
  constructor(param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
  }
}
```

#### Example
```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

let myCar = new Car('Toyota', 'Corolla');
console.log(myCar.brand); // Output: Toyota
console.log(myCar.model); // Output: Corolla
```

### Adding Methods to a Class
Methods are functions defined within a class.

#### Syntax
```javascript
class MyClass {
  constructor(param) {
    this.param = param;
  }
  
  myMethod() {
    console.log('This is a method');
  }
}
```

#### Example
```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    console.log('Engine started');
  }
}

let myCar = new Car('Toyota', 'Corolla');
myCar.startEngine(); // Output: Engine started
```

### Static Methods in Classes
Static methods are called on the class itself, not on instances of the class.

#### Syntax
```javascript
class MyClass {
  static myStaticMethod() {
    console.log('This is a static method');
  }
}
```

#### Example
```javascript
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 3)); // Output: 8
```

#### Why Use Static Methods?
Static methods are useful for utility functions that don't require an instance of the class.

### Extending a Class
Inheritance in JavaScript allows one class to inherit properties and methods from another class using the `extends` keyword.

#### Syntax
```javascript
class ParentClass {
  constructor(param) {
    this.param = param;
  }
}

class ChildClass extends ParentClass {
  constructor(param, childParam) {
    super(param);
    this.childParam = childParam;
  }
}
```

#### Example
```javascript
class Vehicle {
  constructor(type) {
    this.type = type;
  }
}

class Car extends Vehicle {
  constructor(type, brand) {
    super(type);
    this.brand = brand;
  }
}

let myCar = new Car('Sedan', 'Toyota');
console.log(myCar.type);  // Output: Sedan
console.log(myCar.brand); // Output: Toyota
```

### Metaprogramming and Symbols
Metaprogramming refers to the practice of writing code that can manipulate other code or itself. Symbols play a significant role in metaprogramming by enabling the creation of unique and hidden properties.

#### Using Symbols in Metaprogramming
Symbols can be used to define hidden properties that won't conflict with other properties.

```javascript
const mySymbol = Symbol('mySymbol');
const obj = {
  [mySymbol]: 'hidden value'
};

console.log(obj[mySymbol]); // Output: hidden value
```

#### Real-World Example: Custom Iterators
Symbols can be used to create custom iterators.

```javascript
let myIterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (let value of myIterable) {
  console.log(value); // Output: 1, 2, 3
}
```

### Conclusion
This guide provides an overview of several key ES6 features, including symbols, classes, static methods, inheritance, and metaprogramming. Understanding these concepts will help you write more efficient and organized JavaScript code.

For more detailed information, refer to:
- [MDN Web Docs on Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [MDN Web Docs on Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info on Classes](https://javascript.info/class)
- [MDN Web Docs on Static Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
