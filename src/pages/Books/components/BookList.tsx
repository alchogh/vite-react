import { useContext } from "react";
import { BookShow } from "./BookShow";
import { Book } from "@/context/books";
import BooksContext from "@/context/books";

export const BookList = () => {
  const { books } = useContext(BooksContext);
  return (
    <div>
      {books.map((book: Book) => {
        return <BookShow key={book.id} book={book} />;
      })}
    </div>
  );
};
