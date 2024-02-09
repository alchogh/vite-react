import { useState } from "react";
import { Book } from "../Book";

interface EditProps {
  book: Book;
  setShowEdit: (boolean: boolean) => void;
  editBookById: (id: number, newTitle: string) => void;
}

export const BookEdit = ({ book, setShowEdit, editBookById }: EditProps) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    editBookById(book.id, title);
    setShowEdit(false);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};
