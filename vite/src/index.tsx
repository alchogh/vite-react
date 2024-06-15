import ReactDOM from "react-dom/client";
import Router from "./Router";
import { GlobalStyle } from "./styles/globalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <Router />
  </>
);
