const number = document.querySelector("#number");
const repeatNumber = document.querySelector("#number2");
const resultSquared = document.querySelector("#numberSquared");
const resultCubed = document.querySelector("#numberCubed");

number.addEventListener("input", function () {
    repeatNumber.textContent = number.value;
    resultSquared.textContent = number.value ** 2;
    resultCubed.textContent = number.value ** 3;
}
);