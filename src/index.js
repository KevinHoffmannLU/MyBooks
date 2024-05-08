import "./components/RenderBooks.js";
import "./components/Books.js";
import getBooks from "./components/Books.js";
import renderBooks from "./components/RenderBooks.js";

const main = async () => {
  await getBooks();
  await renderBooks();
};

main();
