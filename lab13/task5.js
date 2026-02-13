let hours = Number(prompt("Скільки зараз годин?"));

console.log("=== if ===");
if (hours >= 5 && hours <= 10) {
  console.log("Доброго ранку");
} else if (hours >= 11 && hours <= 16) {
  console.log("Доброго дня");
} else if (hours >= 17 && hours <= 22) {
  console.log("Добрий вечір");
} else {
  console.log("Доброї ночі!");
}

console.log("=== switch-case ===");
switch (true) {
  case hours >= 5 && hours <= 10:
    console.log("Доброго ранку");
    break;
  case hours >= 11 && hours <= 16:
    console.log("Доброго дня");
    break;
  case hours >= 17 && hours <= 22:
    console.log("Добрий вечір");
    break;
  default:
    console.log("Доброї ночі!");
}
