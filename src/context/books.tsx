import { useState, createContext } from "react";

export interface Book {
  id: number;
  title: string;
}

export interface BookListProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  editBookById: (id: number, newTitle: string) => void;
}

const BooksContext = createContext<any>(0);

function Provider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);

  const editBookById = (id: number, newTitle: string) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) return { ...book, title: newTitle };
      return book;
    });

    setBooks(updatedBooks);
  };

  const onSubmit = (title: string) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    setBooks,
    editBookById,
    onSubmit,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
