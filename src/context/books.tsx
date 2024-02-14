import { useState, createContext } from "react";

const BooksContext = createContext<any>(0);

function Provider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(5);

  const valueToShare = {
    count: count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
