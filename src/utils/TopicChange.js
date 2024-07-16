import { state, optionsContainerEl } from "../common.js";
import renderBooks from "../components/RenderBooks.js";

const clickHandler = (e) => {
  // remove active class from all buttons
  const buttons = document.querySelectorAll(".header__options-btn");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  const target = e.target.closest(".header__options-btn");
  if (!target) return;

  // Change Topic
  if (target.id === "all") {
    return renderBooks();
  } else {
    state.currentBooks = state.books.filter((book) => {
      return target.id === book.topic;
    });
  }
  target.classList.add("active");
  renderBooks(state.currentBooks);
};

optionsContainerEl.addEventListener("click", clickHandler);
