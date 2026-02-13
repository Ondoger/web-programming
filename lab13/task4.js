let a = Number(prompt("Введіть сторону a:"));
let b = Number(prompt("Введіть сторону b:"));
let c = Number(prompt("Введіть сторону c:"));

console.log(`Сторони трикутника: a = ${a}, b = ${b}, c = ${c}`);

if (a + b > c && a + c > b && b + c > a) {
  console.log("Трикутник існує.");

  if (a === b && b === c) {
    console.log("Тип: рівносторонній.");
  } else if (a === b || b === c || a === c) {
    console.log("Тип: рівнобедрений.");
  } else {
    console.log("Тип: різносторонній.");
  }

  let sorted = [a, b, c].sort((x, y) => x - y);
  let [s1, s2, s3] = sorted;

  if (s1 * s1 + s2 * s2 === s3 * s3) {
    console.log("Трикутник є прямокутним.");
  } else {
    console.log("Трикутник не є прямокутним.");
  }
} else {
  console.log("Трикутник не існує (сума двох сторін не більша за третю).");
}
