 let nums = [1, 3, 9, 7, 5,];

let sumaMinima = '';
let sumaMax = '';

function numMenor(firstNum) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= firstNum) {
      numMenor = nums[i];
    }
  }
}
// Ejecución de la función
numMenor(nums[0]);


let numActual = '';
let numMayor = 0;
for (let i = 0; i < nums.length; i++) {
  numActual = nums[i];

  if (numActual > numMayor) {
    numMayor = nums[i];
  }
}

function sumatorias() {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    sumaMax = total - numMenor;
    sumaMinima = total - numMayor;
  }
  console.log(`El total de la sumatoria completa es:  ${total}`);
}
sumatorias();


console.log(`La sumatoria minima es: ${sumaMinima}`);
console.log(`La sumatoria maxima es: ${sumaMax}`);



