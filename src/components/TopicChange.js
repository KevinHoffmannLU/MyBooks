import {
  state,
  optionsContainerEl,
  headerTitleEl,
  resetButtonEl,
} from "../common.js";
import renderBooks from "./RenderBooks.js";

const clickHandler = (e) => {
  const target = e.target.closest(".topic-btn");
  if (!target) return;

  // Change Topic
  state.currentBooks = state.books.filter((book) => {
    return book.topic.includes(target.textContent);
  });

  renderBooks("current");
};

optionsContainerEl.addEventListener("click", clickHandler);
headerTitleEl.addEventListener("click", () => renderBooks("default"));
resetButtonEl.addEventListener("click", () => renderBooks("default"));
