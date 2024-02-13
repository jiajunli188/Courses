const btn = document.querySelector("#button");
btn.addEventListener("click", (e) => {
    console.log("Event listner with btn.addEventListener")
    console.log(e.target)
});

const buttonEvent = (e) => {
  console.log("Event listner with arrow function")
}