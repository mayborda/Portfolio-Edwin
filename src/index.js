import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Web from "./routes/Web";
import Mobile from "./routes/Mobile";
import Totem from "./routes/Totem";
import Api from "./routes/Api";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="web" element={<Web />} />
        <Route path="mobile" element={<Mobile />} />
        <Route path="totem" element={<Totem />} />
        <Route path="api" element={<Api />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
