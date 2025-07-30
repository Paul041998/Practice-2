let userNumber = parseInt(prompt("Введіть натуральне число:"));
let evenDivisors = 0;
let sumEvenDivisors = 0;

document.write("Парні дільники числа " + userNumber + ":<br>");

for (let i = 1; i <= userNumber; i++) {
  if (userNumber % i === 0 && i % 2 === 0) {
    evenDivisors++;
    sumEvenDivisors += i;
    document.write(i + "<br>");
  }
}

document.write("Кількість парних дільників: " + evenDivisors + "<br>");
document.write("Сума парних дільників: " + sumEvenDivisors);
