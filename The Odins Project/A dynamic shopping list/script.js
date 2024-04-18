const submitInput = () => {
  const userList = document.querySelector("ul");
  const userInput = document.querySelector("#item").value;

  if (userInput.trim() === "") {
    alert("No text given");
    return;
  }

  const listElement = document.createElement("li");
  const buttonElement = document.createElement("button");

  listElement.textContent = userInput;
  buttonElement.textContent = "delete";

  buttonElement.addEventListener("click", () => {
    userList.removeChild(listElement);
  });

  listElement.appendChild(buttonElement);
  userList.appendChild(listElement);
};
