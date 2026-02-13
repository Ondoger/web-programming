let input = prompt("Введіть число:");
let num = Number(input);

if (num > 0 && num % 2 === 0) {
  console.log(num + " є парним додатним числом.");
} else {
  console.log(num + " не є парним додатним числом.");
}

if (num % 7 === 0) {
  console.log(num + " кратне числу 7.");
} else {
  console.log(num + " не є кратним числу 7.");
}
