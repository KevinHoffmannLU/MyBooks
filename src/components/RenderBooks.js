import { booksContainerEl, state } from "../common.js";

const renderBooks = (current = "default") => {
  const bookList = current === "default" ? state.books : state.currentBooks;

  booksContainerEl.innerHTML = "";

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
                  book.rating
                }/10</div>
                </div>
            </div>
    `;

    booksContainerEl.insertAdjacentHTML("beforeend", bookHTML);
  });
};

export default renderBooks;
