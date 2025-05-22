const firstText = document.querySelector("#firstText");
const repeatText = document.querySelector("#repeatText");

firstText.addEventListener("input", function () {
  repeatText.value = firstText.value;
}
);