import { useContext } from "react";
import BooksContext from "@/context/books";

export default function useBooksContext() {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
}
