import { state, searchEl } from "../common.js";
import renderBooks from "./RenderBooks.js";

const changeHandler = (e) => {
  if (searchEl.value === "") return renderBooks("default");
  const current = [...state.books].filter((book) => {
    return book.title.toLowerCase().includes(searchEl.value.toLowerCase());
  });
  renderBooks(current);
};

searchEl.addEventListener("input", changeHandler);
