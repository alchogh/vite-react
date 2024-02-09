import { BookShow } from "./BookShow";
import { Book } from "../Book";

export interface BookListProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  editBookById: (id: number, newTitle: string) => void;
}

export const BookList = ({ books, setBooks, editBookById }: BookListProps) => {
  return (
    <div>
      {books.map((book) => {
        return (
          <BookShow
            key={book.id}
            book={book}
            setBooks={setBooks}
            books={books}
            editBookById={editBookById}
          />
        );
      })}
    </div>
  );
};
