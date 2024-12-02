          //  DESTRUCTURING

// Destructuring JavaScript ki ek syntax feature hai jo arrays aur objects ke elements ko easily
// extract karne ki facility deti hai, taake aap unhe separate variables mein assign kar saken. 
// Yeh feature code ko concise aur readable banata hai.

// Destructuring in JavaScript
//  1. Array Destructuring
//  2. Object Destructuring
//  3. Combination of Array and Object Destructuring
//  4. Use Cases of Destructuring


//  a. ARRAY DESTRUCTURING:
// Array destructuring ki madad se ham array k specific elements ko easily variables mein assign kar
// sakte hain,jo code ko zyada readable aur asaan banata hai.

// example:
const fruits: string[] = ["apple", "pomegranate", "peach", "cherry", "melon", "strawberry", "persimmon"];
console.log(fruits);

// Traditional Way

const fruitone = fruits[0]; // output : 'apple'
const friuttwo = fruits[4]; // output : 'melon'

console.log(fruitone, friuttwo); //output : apple, melon

// Destructuring Way

let [first, second, third] = fruits;

console.log(first); // output : "apple"
console.log(second); // output : "pomegranate"
console.log(third); // output : "peach"

// Skipping Elements

let [fruit1, fruit2, fruit3, , friut5, , friut7] = fruits

// yeh baat zaruri nahi hy k hamay array ka koi bhi element extract karnay k liye means destructuring kartay 
// wakt koi meaningful name hi choose karna, ham koi bhi naam rakh saktay hein lekin aesa kartya nahi hy 
// because meaningful names code ko readable aur samajhne mein asaan banate hain, aur best practices ke mutabiq,
// variables ka naam unke content ya purpose ko reflect karna chahiye.

console.log(fruit1); // output : apple
console.log(fruit2); // output : pomegranate
console.log(fruit3); // output : peach
console.log(friut5); // output : melon
console.log(friut7); //output : persimmon 


// Default Values

const cars: string[] = ["Bugatti Chiron Super Sport", "Lamborghini Aventador Ultimae", "Rolls-Royce Phantom"];

console.log(cars);

let [car1, car2, car3, car4 = "Ferrari SF90 Stradale"] = cars;

console.log(car1); // output : Bugatti Chiron Super Sport
console.log(car2); // output : Lamborghini Aventador Ultimae
console.log(car3); // output : Rolls-Royce Phantom
console.log(car4); // output : Ferrari SF90 Stradale

let [car_one, car_two, car_three, car_four = "Ferrari SF90 Stradale"] = 
    ["Bugatti Chiron Super Sport", "Lamborghini Aventador Ultimae", "Rolls-Royce Phantom"];

console.log(car_four); // output : Ferrari SF90 Stradale




//  b. OBJECT DESTRUCTURING:
// Object destructuring ki madad se ham objects ki properties ko separately variables mein assign karte hain.

// example:

const person : {
  username: string;
  id: number;
  age: number;
  country: string;
  city?: string;
  contact: {
    email: string;
    phone: string
  }
} = {
  username: "Tom",
  id: 1,
  age: 25,
  country: "USA",
  contact: {
    email: "tom@example.com",
    phone: "+123456789"
  },
}

console.log(person);

// Traditional Way
const personName = person.username;
console.log(personName); // output : Tom

const personAge = person.age;
console.log(personAge); // output : 25


// Destructuring Way
// Simple call karnay k liye apnay object ki proprty ko yani k apnay object ka sahara na lena paray
// call kartay waqt
const {username, id, age, country} = person;

console.log(username); //output : Tom
console.log(id); //output : 1
console.log(age); //output : 25
console.log(country); //output : USA


// Renaming Variables
// Agar ham destructuring k time apnay variable ka naam change karna chahte hain to ham apnay object 
// ki properties k name ko rename bhi kar saktay hein

const {username: fullName, age: years} = person;
console.log(fullName); // output : Tom
console.log(years); // output : 25


// Optional Values
// Agar hamaray object mai koi property optional hy to destructuring mai ham uss property ko new vlaue
// ya phir koi dusri value bhi assign kar saktay hein ya unknown bhi.

const { city = 'Unknown' } = person;
console.log(city); // Output: 'Unknown'


// Nested Destructuring
// Agar hamaray object ke andar nested objects hain yani k apnay nested objects ki property ko extract
// karna hoto

const {contact : {email, phone} } = person;
console.log(email); // output : tom@example.com
console.log(phone); // output : +123456789



//  c. Combination of Array and Object Destructuring
// Ham apnay array aur objects ko combine karke destructure kar sakte hain.

// example:
const data = [
  { id: 1,
    name: 'Sowaiba Naz'
  },
  { id: 2,
    name: 'Sown Sheikh' 
  },
];

const [{ name: firstName }, { name: secondName }] = data;

console.log(firstName); // Output: 'Sowaiba Naz'
console.log(secondName); // Output: 'Sown Sheikh'




//  d.Use Cases of Destructuring

type User = {
  username : string;
  age : number;
  rollNo : number;
}

const userDetails: User = {
  username : "Jerry",
  age : 30,
  rollNo : 2
}

const {rollNo} = userDetails;
console.log(rollNo);

function greetPerson({username, age, rollNo}: User) {
  console.log(`Hello ${username}! You are ${age} years old. Your id is ${rollNo}.`);
}
console.log(greetPerson);