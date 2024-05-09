import { state } from "../common.js";

const getBooks = async () => {
  const res = await fetch("./src/books.json");
  const data = await res.json();
  state.books = data.books;
};

export default getBooks;
