import { state, optionsContainerEl, headerTitleEl } from "../common.js";
import renderBooks from "./RenderBooks.js";

// ! FIX NAMES AND JSON FILE

const clickHandler = (e) => {
  const target = e.target.closest("button");
  let current = "current";
  if (!target) return;
  if (target.className.includes("reset")) return renderBooks("default");
  // Change Topic
  if (target.className.includes("topic")) {
    state.currentBooks = state.books.filter((book) => {
      return book.topic.includes(target.textContent);
    });
  }
  // Change Order
  if (target.className.includes("order")) {
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
      current = [...state.currentBooks].filter(
        (book) => book.status === "Read"
      );
    }
    if (target.textContent === "Reading Only") {
      current = [...state.currentBooks].filter(
        (book) => book.status === "Reading"
      );
    }
    if (target.textContent === "Unread Only") {
      current = [...state.currentBooks].filter(
        (book) => book.status === "Not Read"
      );
    }
  }
  renderBooks(current);
};

optionsContainerEl.addEventListener("click", clickHandler);
headerTitleEl.addEventListener("click", () => renderBooks("default"));
