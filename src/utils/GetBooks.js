import { state } from "../common.js";

const getSortedBooks = async () => {
  const res = await fetch("./src/books.json");
  const data = await res.json();
  // sort the books alphabetically on first fetch
  data.books.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  state.books = [...data.books];
};

export default getSortedBooks;
