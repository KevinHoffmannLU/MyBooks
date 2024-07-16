import "./components/RenderBooks.js";
import "./utils/GetBooks.js";
import "./utils/TopicChange.js";
// import "./components/OrderChange.js";
import "./utils/Search.js";
import getSortedBooks from "./utils/GetBooks.js";
import renderBooks from "./components/RenderBooks.js";
import { state, optionsLogoEl, optionsContainerEl, booksEl } from "./common.js";

const main = async () => {
  await getSortedBooks();
  state.currentBooks = [...state.books];
  await renderBooks();
};

main();

optionsLogoEl.addEventListener("click", () => {
  optionsContainerEl.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (
    !optionsContainerEl.contains(e.target) &&
    !optionsLogoEl.contains(e.target)
  ) {
    optionsContainerEl.classList.add("hidden");
  }
});

// document.addEventListener("wheel", (e) => {
//   if (!booksEl.contains(e.target)) {
//     if (e.deltaY > 0) {
//       // booksEl.scrollTop += 100;
//       scrollBooks("down");

//       // booksEl.scrollBy({
//       //   top: 100,
//       //   behavior: "smooth",
//       // });
//     } else {
//       // booksEl.scrollBy({
//       //   top: -100,
//       //   behavior: "smooth",
//       // });
//       // booksEl.scrollTop -= 100;
//       scrollBooks("up");
//     }
//   }
// });

// async function scrollBooks(direction) {
//   const scrollAmount = 100;
//   const delay = 20;
//   let scrollCounter = 0;
//   const scroll = () => {
//     if (direction === "down") {
//       booksEl.scrollTop += 1;
//     } else {
//       booksEl.scrollTop -= 1;
//     }
//     scrollCounter++;
//     if (scrollCounter < scrollAmount) {
//       setTimeout(scroll, delay);
//     }
//   };
// }
