import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Book } from "./pages/Books/Book";
import { Product } from "./pages/ProductList/Product";
import { Provider } from "./context/books";

const Router = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/book" element={<Book />} />
          <Route path="/section-5" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
