let sum = 0;
let count = 0;

for (let i = 1; i <= 500; i++) {
  sum += i;
  count++;
}
let average = sum / count;

console.log("Середнє арифметичне від 1 до 500:", average);
