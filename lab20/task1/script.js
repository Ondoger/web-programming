function validateCardNumber(cardNumber) {
  const regex = /^[45]\d{15}$/;
  return regex.test(cardNumber);
}

console.log('--- Завдання 1: Банківська карта ---');
console.log(validateCardNumber('4111111111111111'));
console.log(validateCardNumber('5500005555555559'));
console.log(validateCardNumber('6111111111111111'));
console.log(validateCardNumber('411111111111111'));
console.log(validateCardNumber('41111111111111112'));
