import { state, optionsContainerEl } from "../common.js";
import renderBooks from "./RenderBooks.js";

const clickHandler = (e) => {
  const target = e.target.closest("button");
  const currentBooks = state.books.filter((book) => {
    return book.topic.includes(target.textContent);
  });
  state.currentBooks = currentBooks;
  renderBooks("current");
};

optionsContainerEl.addEventListener("click", clickHandler);
