let status = prompt("Який статус маски?");

console.log("=== if...else ===");
if (status === "отримано") {
  console.log("Замовлення отримано. Дякуємо!");
} else if (status === "в дорозі") {
  console.log("Замовлення в дорозі. Очікуйте.");
} else if (status === "скасовано") {
  console.log("Замовлення скасовано. Шкода.");
} else {
  console.log("Статус невідомий. Зверніться до підтримки.");
}

console.log("=== switch ===");
switch (status) {
  case "отримано":
    console.log("Замовлення отримано. Дякуємо!");
    break;
  case "в дорозі":
    console.log("Замовлення в дорозі. Очікуйте.");
    break;
  case "скасовано":
    console.log("Замовлення скасовано. Шкода.");
    break;
  default:
    console.log("Статус невідомий. Зверніться до підтримки.");
}
