import { booksContainerEl, state } from "../common.js";

const renderBooks = () => {
  state.books.forEach((book) => {
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
                <div class="books-container__book__status ${
                  book.status === "Read" && "read"
                } ${book.status === "Reading" && "reading"}">${
      book.status
    }</div>
                <div class="books-container__book__review">${
                  book.rating
                }/5</div>
            </div>
    `;

    booksContainerEl.insertAdjacentHTML("beforeend", bookHTML);
  });
};

export default renderBooks;
