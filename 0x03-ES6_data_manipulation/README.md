# JavaScript Array and Data Structures

## Table of Contents

1. [Introduction to Array Methods](#introduction-to-array-methods)
   - [map()](#map)
   - [filter()](#filter)
   - [reduce()](#reduce)
2. [Typed Arrays](#typed-arrays)
3. [Set Data Structure](#set-data-structure)
4. [Map Data Structure](#map-data-structure)
5. [WeakMap Data Structure](#weakmap-data-structure)

## Introduction to Array Methods

JavaScript provides several powerful methods to work with arrays, such as `map()`, `filter()`, and `reduce()`. These methods are used to create new arrays, filter out elements, and accumulate values.

### map()

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);

console.log(doubled); // [2, 4, 6, 8]
```

### filter()

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(number => number % 2 === 0);

console.log(evens); // [2, 4]
```

### reduce()

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, number) => total + number, 0);

console.log(sum); // 10
```

## Typed Arrays

Typed Arrays provide a mechanism for accessing raw binary data. These are array-like objects but with a specific type of elements (e.g., `Int8Array`, `Uint8Array`, `Float32Array`).

**Example:**
```javascript
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);

int32View[0] = 42;

console.log(int32View[0]); // 42
```

## Set Data Structure

A `Set` is a collection of values where each value must be unique. It is similar to an array but without duplicate values.

**Example:**
```javascript
const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); // duplicate, will be ignored

console.log(mySet); // Set { 1, 5 }
```

### Useful Methods:
- `add(value)`: Adds a new element with the given value.
- `has(value)`: Returns a boolean indicating whether the value exists.
- `delete(value)`: Removes the specified element.

## Map Data Structure

A `Map` is a collection of keyed data items, similar to an object. However, the keys can be of any type, including functions, objects, or any primitive.

**Example:**
```javascript
const myMap = new Map();

const keyObj = {};
const keyFunc = function() {};

myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

console.log(myMap.get(keyObj)); // 'value associated with keyObj'
console.log(myMap.get(keyFunc)); // 'value associated with keyFunc'
```

### Useful Methods:
- `set(key, value)`: Adds or updates an element with the specified key and value.
- `get(key)`: Returns the value associated with the key.
- `has(key)`: Returns a boolean indicating whether the key exists.
- `delete(key)`: Removes the specified element.

## WeakMap Data Structure

A `WeakMap` is a collection of key/value pairs where the keys are objects and the values can be arbitrary values. The key objects in a `WeakMap` are held "weakly," meaning that they do not prevent garbage collection if there are no other references to the object.

**Example:**
```javascript
const myWeakMap = new WeakMap();

const keyObj = {};
myWeakMap.set(keyObj, 'some value');

console.log(myWeakMap.get(keyObj)); // 'some value'

keyObj = null; // keyObj is eligible for garbage collection
```

### Useful Methods:
- `set(key, value)`: Adds or updates an element with the specified key (must be an object) and value.
- `get(key)`: Returns the value associated with the key.
- `has(key)`: Returns a boolean indicating whether the key exists.
- `delete(key)`: Removes the specified element.

