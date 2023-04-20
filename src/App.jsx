import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { Promociones } from "./components/pages/promocion/Promociones";
import { Header } from "./components/layouts/header/Header";
import { Footer } from "./components/layouts/footer/Footer";
import { Procedimientos } from "./components/pages/procedimientos/Procedimientos";
import { Nosotros } from "./components/pages/nosotros/Nosotros";
import {Clinica} from "./components/pages/clinica/Clinica";
// import { Blog } from "./components/pages/Blog/Blog";
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/Procedimientos" element={<Procedimientos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Clinica" element={<Clinica />} />
        {/* <Route path="/Blog" element={<Blog />} /> */}
      </Routes>
    <Footer />
    </>
  );
}

export default App;