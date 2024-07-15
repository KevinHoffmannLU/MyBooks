import "./components/RenderBooks.js";
import "./components/GetBooks.js";
// import "./components/TopicChange.js";
// import "./components/OrderChange.js";
// import "./components/Search.js";
import getBooks from "./components/GetBooks.js";
import renderBooks from "./components/RenderBooks.js";
import { state } from "./common.js";

const main = async () => {
  await getBooks();
  state.currentBooks = [...state.books];
  await renderBooks();
};

main();

// // ! LEFT TO DO: REFACTOR (ESPECIALLY HTML), CLEAN UP NAMING, BETTER INTERACTION BETWEEN STATE AND SEARCH
// // ? TRY OUT A SIMPLE BLACK, WHITE AND GRAY THEME
