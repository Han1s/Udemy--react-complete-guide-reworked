// Primitives: number, string, boolean
// More complet types: arrays, objects
// Functions types, parameters

// Primitives
let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
  name: string,
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32
};

let peope: Person[]; 

// Type union
let course: string | number = 'React - The Complete Guide';
course = 3;

// Functions & types
function add(a: number, b: number): number {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');