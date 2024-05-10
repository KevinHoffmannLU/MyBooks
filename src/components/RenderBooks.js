import { booksContainerEl, state } from "../common.js";

const renderBooks = (current = "default") => {
  // const bookList = current === "default" ? state.books : state.currentBooks;
  let bookList;
  if (current === "default") {
    bookList = state.books;
  } else if (current === "current") {
    bookList = state.currentBooks;
  } else {
    bookList = current;
  }
  if (current === "default") state.currentBooks = [...state.books];

  booksContainerEl.innerHTML = "";

  let c = 0;
  bookList.forEach((book) => {
    const bookHTML = `
        <div class="books-container__book">
                <div class="books-container__book__title">
                ${book.title}
                </div>
                <div class="books-container__book__author">${book.author}</div>
                <div class="books-container__book__img-container">
                <img
                    class="books-container__book__img-container__img"
                    src="${book.img}"
                    alt=""
                />
                </div>
                <div class="books-container__book__description">
                <div class="books-container__book__description__status ${
                  book.status === "Read" && "read"
                } ${book.status === "Reading" && "reading"}">${
      book.status
    }</div>
                <div class="books-container__book__description__review">${
                  book.rating ? `${book.rating}/10` : ""
                }</div>
                </div>
            </div>
    `;

    booksContainerEl.insertAdjacentHTML("beforeend", bookHTML);
    c++;
  });

  // ! Turn this into a div
  if (c === 0) {
    booksContainerEl.innerHTML = `
        No Books Found
    `;
  }
};

export default renderBooks;
