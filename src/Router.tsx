import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Product } from "./ProductList/Product";
import { ProfiledCard } from "./ProfiledCard";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/abc" element={<ProfiledCard />} />
        <Route path="/section-5" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
