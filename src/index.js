import "./components/RenderBooks.js";
import "./components/GetBooks.js";
import "./components/OptionButton.js";
import getBooks from "./components/GetBooks.js";
import renderBooks from "./components/RenderBooks.js";
import { state } from "./common.js";

const main = async () => {
  await getBooks();
  state.currentBooks = state.books;
  await renderBooks();
};

main();
