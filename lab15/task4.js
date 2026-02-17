function toCamelCase(str) {
  return str
    .split('-')
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

console.log('--- Task 4 ---');
console.log(toCamelCase('font-size'));
console.log(toCamelCase('background-color'));
console.log(toCamelCase('border-top-width'));
console.log(toCamelCase('margin-bottom'));
console.log(toCamelCase('color'));
