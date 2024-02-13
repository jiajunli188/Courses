const items = [];

const submitInput = () => {
  const userInput = document.querySelector("#item").value;

  if (userInput.trim() !== "") {
    items.push(userInput);
  }
};
