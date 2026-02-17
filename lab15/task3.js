function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log('--- Task 3 ---');
console.log(capitalizeWords('i like java script'));
console.log(capitalizeWords('hello world'));
console.log(capitalizeWords('the quick brown fox'));
