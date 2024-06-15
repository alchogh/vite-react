import useBooksContext from "@/hooks/useBooksContext";
import { BookShow } from "./BookShow";
import { Book } from "@/context/books";

export const BookList = () => {
  const { books } = useBooksContext();
  return (
    <div>
      {books.map((book: Book) => {
        return <BookShow key={book.id} book={book} />;
      })}
    </div>
  );
};
