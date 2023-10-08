//Accordion part
// open and close accordion
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const button = accordion.querySelector(".accordion-button");
  const content = accordion.querySelector(".accordion-content");

  // Set initial state as closed
  content.style.maxHeight = "0";
  accordion.classList.remove("active");

  button.addEventListener("click", () => {
    if (content.style.maxHeight === "0px") {
      content.style.maxHeight = content.scrollHeight + "px";
      accordion.classList.add("active");
      button.innerHTML =
        "Click this button to <strong>hide</strong> description for this project!";
    } else {
      content.style.maxHeight = "0px";
      accordion.classList.remove("active");
      button.innerHTML =
        "Click this button to <strong>show</strong> description for this project!";
    }
  });
});
