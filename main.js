// Your code here.

function getFirstName(person) {
  let firstName = person.firstName;
  return firstName;
}

function getLastName(person) {
  let lastName = person.lastName;
  return lastName;
}

function getFullName(person) {
  let firstName = person.firstName;
  let lastName = person.lastName;
  let fullName = `${firstName} ${lastName}`;
  return fullName;
}

function setFirstName(person, newName) {
  person.firstName = newName;
  return person;
}

function setAge(person, newAge) {
  person.age = newAge;
  return person;
}

function giveBirthday(person) {
  let age = person.age;
  if (person.age === undefined) {
    person.age = 1;
    return person;
  } else {
    person.age = age + 1;
    return person;
  }
}

function marry(person1, person2) {
  let justGotMarried = true;
  let person1Name = `${person1.firstName} ${person1.lastName}`;
  let person2Name = `${person2.firstName} ${person2.lastName}`;
  person1.married = justGotMarried;
  person1.spouseName = person2Name;
  person2.married = justGotMarried;
  person2.spouseName = person1Name;
  return person1, person2;
}

function divorce(person1, person2) {
  let notMarried = false;
  delete person1.spouseName;
  delete person2.spouseName;
  person1.married = notMarried;
  person2.married = notMarried;
  return person1, person2;
}

// Our code here. Don't touch!
if (typeof getFirstName === "undefined") {
  getFirstName = undefined;
}

if (typeof getLastName === "undefined") {
  getLastName = undefined;
}

if (typeof getFullName === "undefined") {
  getFullName = undefined;
}

if (typeof setFirstName === "undefined") {
  setFirstName = undefined;
}

if (typeof setAge === "undefined") {
  setAge = undefined;
}

if (typeof giveBirthday === "undefined") {
  giveBirthday = undefined;
}

if (typeof marry === "undefined") {
  marry = undefined;
}

if (typeof divorce === "undefined") {
  divorce = undefined;
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
};
