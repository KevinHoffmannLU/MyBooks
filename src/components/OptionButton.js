import { state, optionsContainerEl, headerTitleEl } from "../common.js";
import renderBooks from "./RenderBooks.js";

const clickHandler = (e) => {
  const target = e.target.closest("button");
  if (!target) return;
  state.currentBooks = [...state.books];
  if (target.className.includes("reset")) return renderBooks("default");
  if (target.className.includes("topic")) {
    state.currentBooks = state.books.filter((book) => {
      return book.topic.includes(target.textContent);
    });
  }
  if (target.className.includes("order")) {
    // ! FIX NAMES AND JSON FILE
    if (target.textContent === "A-Z Title") {
      state.currentBooks = state.currentBooks.sort((a, b) => {
        return a.title[0].toLowerCase() > b.title[0].toLowerCase() ? 1 : -1;
      });
    }
    if (target.textContent === "A-Z Author") {
      state.currentBooks = state.currentBooks.sort((a, b) => {
        return a.author[0].toLowerCase() > b.author[0].toLowerCase() ? 1 : -1;
      });
    }
    if (target.textContent === "First to Last Read")
      state.currentBooks = state.currentBooks.sort((a, b) => {
        if (a.id === "none") return 1;
        return a.id - b.id;
      });
    if (target.textContent === "By Rating") {
      state.currentBooks = state.currentBooks.sort((a, b) => {
        return b.rating - a.rating;
      });
    }
    if (target.textContent === "Read Only") {
      state.currentBooks = state.currentBooks.filter(
        (book) => book.status === "Read"
      );
    }
    if (target.textContent === "Reading Only") {
      state.currentBooks = state.currentBooks.filter(
        (book) => book.status === "Reading"
      );
    }
    if (target.textContent === "Unread Only") {
      state.currentBooks = state.currentBooks.filter(
        (book) => book.status === "Not Read"
      );
    }
  }
  renderBooks("current");
};

optionsContainerEl.addEventListener("click", clickHandler);
headerTitleEl.addEventListener("click", () => renderBooks("default"));
