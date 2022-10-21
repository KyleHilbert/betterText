const text = document.querySelector(".pick");

function capitalizeFirstLetter(string) {
  if (string.length == "3") {
    const firstPart = document.createElement("span");
    firstPart.textContent = string.substring(0, 1);
    firstPart.style.fontWeight = "1000";
    const secondPart = document.createElement("span");
    secondPart.textContent = string.substring(1, 3);
    text.appendChild(firstPart);
    text.appendChild(secondPart);
  }
}

console.log(capitalizeFirstLetter("cow")); // Foo
