// import {
//   booksContainerEl,
//   booksCounterEl,
//   searchEl,
//   state,
// } from "../common.js";

// const renderBooks = (current = "default") => {
//   // const bookList = current === "default" ? state.books : state.currentBooks;
//   let bookList;
//   if (current === "default") {
//     bookList = state.books;
//     searchEl.value = "";
//   } else if (current === "current") {
//     bookList = state.currentBooks;
//     searchEl.value = "";
//   } else {
//     bookList = current; // ! Should fix the search bar issue where it is ignored/ not cleared
//   }
//   if (current === "default") state.currentBooks = [...state.books];

//   booksContainerEl.innerHTML = "";

//   let c = 0;
//   bookList.forEach((book) => {
//     let status;
//     if (book.status === "y") {
//       status = "Finished";
//     } else if (book.status === "r") {
//       status = "Started";
//     } else {
//       status = "Unread";
//     }

//     const bookHTML = `
//         <div class="books-container__book">
//                 <div class="books-container__book__title">
//                 ${book.title}
//                 </div>
//                 <div class="books-container__book__author">${book.author}</div>
//                 <div class="books-container__book__img-container">
//                 <a href="${
//                   book.amazon
//                 }" target="_blank" rel="noopener noreferrer">
//                 <img
//                     class="books-container__book__img-container__img"
//                     src="${book.img}"
//                     alt=""
//                 />
//                 </a>
//                 </div>
//                 <div class="books-container__book__description">
//                 <div class="books-container__book__description__status ${
//                   status === "Finished" && "read"
//                 } ${status === "Started" && "reading"}">${status}</div>
//                 <div class="books-container__book__description__review">${
//                   book.rating ? `${book.rating}/10` : ""
//                 }</div>
//                 </div>
//             </div>
//     `;

//     booksContainerEl.insertAdjacentHTML("beforeend", bookHTML);
//     c++;
//   });

//   booksCounterEl.textContent = `${c} Results`;

//   // ! Turn this into a div
//   // if (c === 0) {
//   //   booksContainerEl.innerHTML = `
//   //       No Books Found
//   //   `;
//   // }
// };

// export default renderBooks;

import { state, booksContainerEl } from "../common.js";

const renderBooks = (current = "def") => {
  booksContainerEl.innerHTML = "";

  let booksList = null;

  if (current === "def") {
    booksList = state.books;
  } else {
    booksList = current;
  }

  booksList.forEach((book) => {
    const bookHTML = `
      <section class="book">
        <div class="book__img-container">
          <a href=${
            book.amazon
          } target="_blank"><img class="book__img-container-img" src=${
      book.img
    } /></a>
        </div>
        <section class="book__data">
          <div class="book__data-title">${book.title}</div>
          <div class="book__data-author">${book.author}</div>
          <div class="book__data-status ${
            book.status === "Not Read" && "not-read"
          } ${book.status === "Read" && "read"} ${
      book.status === "Reading..." && "reading"
    }">${book.status} </div>
        </section>
      </section>
    `;
    booksContainerEl.insertAdjacentHTML("beforeend", bookHTML);
  });
};

export default renderBooks;
