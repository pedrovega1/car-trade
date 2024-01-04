import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layouts.js/Header";
import Main from "./components/pages/Main";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Catalog from "./components/pages/Catalog";
import CatalogID from "./components/pages/ID/CatalogID";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog:id" element={<CatalogID />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
