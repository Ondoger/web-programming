const student = {
  name: 'Alice',
  age: 20,
  gender: 'female'
};

const { name: studentName, age: studentAge, gender: studentGender } = student;

console.log('--- Task 1.1 ---');
console.log('studentName:', studentName);
console.log('studentAge:', studentAge);
console.log('studentGender:', studentGender);

const car = {
  brand: 'Toyota',
  engine: {
    cylinders: 4,
    horsepower: 150
  }
};

const { engine: { cylinders: engineCylinders, horsepower: engineHorsepower } } = car;

console.log('\n--- Task 1.2 ---');
console.log('engineCylinders:', engineCylinders);
console.log('engineHorsepower:', engineHorsepower);

const book = {
  title: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford'
};

const { title: bookTitle, author: bookAuthor } = book;

console.log('\n--- Task 1.3 ---');
console.log('bookTitle:', bookTitle);
console.log('bookAuthor:', bookAuthor);
