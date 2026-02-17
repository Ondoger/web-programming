const numbers = [1, 2, 3];
const [firstNumber, secondNumber, thirdNumber] = numbers;

console.log('--- Task 2.1 ---');
console.log('firstNumber:', firstNumber);
console.log('secondNumber:', secondNumber);
console.log('thirdNumber:', thirdNumber);

const fruits = ['apple', 'orange', 'banana'];
const [firstFruit, ...restFruits] = fruits;

console.log('\n--- Task 2.2 ---');
console.log('firstFruit:', firstFruit);
console.log('restFruits:', restFruits);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log('\n--- Task 2.3 ---');
console.log('combinedArray:', combinedArray);
