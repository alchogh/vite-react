import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ProfiledCard } from "./ProfiledCard";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/abc" element={<ProfiledCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
