import "./components/RenderBooks.js";
import "./utils/GetBooks.js";
import "./utils/TopicChange.js";
// import "./components/OrderChange.js";
import "./utils/Search.js";
import getSortedBooks from "./utils/GetBooks.js";
import renderBooks from "./components/RenderBooks.js";
import { state, optionsLogoEl, optionsContainerEl } from "./common.js";

const main = async () => {
  await getSortedBooks();
  state.currentBooks = [...state.books];
  await renderBooks();
};

main();

optionsLogoEl.addEventListener("click", () => {
  optionsContainerEl.classList.toggle("hidden");
});
