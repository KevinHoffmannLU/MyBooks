import { state, optionsContainerEl } from "../common.js";
import renderBooks from "./RenderBooks.js";

const clickHandler = (e) => {
  const target = e.target.closest(".order-btn");
  if (!target) return;

  // Change Order
  let current;
  if (target.textContent === "A-Z Title") {
    current = [...state.currentBooks].sort((a, b) => {
      return a.title[0].toLowerCase() > b.title[0].toLowerCase() ? 1 : -1;
    });
  }
  if (target.textContent === "A-Z Author") {
    current = [...state.currentBooks].sort((a, b) => {
      return a.author[0].toLowerCase() > b.author[0].toLowerCase() ? 1 : -1;
    });
  }
  if (target.textContent === "First to Last Read")
    current = [...state.currentBooks].sort((a, b) => {
      if (a.id === "none") return 1;
      return a.id - b.id;
    });
  if (target.textContent === "By Rating") {
    current = [...state.currentBooks].sort((a, b) => {
      return b.rating - a.rating;
    });
  }
  if (target.textContent === "Read Only") {
    current = [...state.currentBooks].filter((book) => book.status === "y");
  }
  if (target.textContent === "Reading Only") {
    current = [...state.currentBooks].filter((book) => book.status === "r");
  }
  if (target.textContent === "Unread Only") {
    current = [...state.currentBooks].filter((book) => book.status === "n");
  }
  renderBooks(current);
};

optionsContainerEl.addEventListener("click", clickHandler);
