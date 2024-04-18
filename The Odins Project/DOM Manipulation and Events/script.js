const container = document.querySelector(".content");

container.textContent = "Welcome to the page";

const pElement = document.createElement("p");
const h3Element = document.createElement("h3");
const divElement = document.createElement("div");

const h1Element = document.createElement("h1");
const p2Element = document.createElement("p");

pElement.textContent = "Hey I,m red!";
pElement.style.color = "red";
h3Element.textContent = "I'm a blue h3!";
h3Element.style.color = "blue";

divElement.style.backgroundColor = "pink";
divElement.style.border = "2px solid black";

h1Element.textContent = "I'm in a div";
p2Element.textContent = "ME TOO!";

divElement.append(h1Element, p2Element);

container.append(pElement, h3Element, divElement);
