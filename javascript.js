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

function splitTest(string) {
  const list = string.split(" ").join(".").split(".");
  for (let i = 0; i < list.length; i++) {
    if (list[i].length > 1) {
      const firstPart = document.createElement("span");
      firstPart.textContent = list[i].substring(
        0,
        Math.floor(list[i].length / 2)
      );
      firstPart.style.fontWeight = "1000";

      const secondPart = document.createElement("span");
      secondPart.textContent =
        list[i].substring(Math.floor(list[i].length / 2), list[i].length) + " ";
      secondPart.style.fontWeight = "500";

      text.appendChild(firstPart);
      text.appendChild(secondPart);
    } else {
      const firstPart = document.createElement("span");
      firstPart.textContent = list[i] + " ";
      firstPart.style.fontWeight = "1000";
      text.appendChild(firstPart);
    }
  }
}

splitTest(
  "Test Driven Development is the practice of writing a test for a piece of required functionality, before writing any implementation code. This test should fail when first run, and then, you write the code to get it to pass. It doesn’t have to be the most perfect code, just so long as the test passes. Once it does, you can then safely refactor your code."
);
