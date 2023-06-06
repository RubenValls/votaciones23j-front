// import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio";
import Votos from "./pages/votos/Votos";
import Web from "./pages/web/Web";

function App() {
  // const [votos, setVotos] = useState(null);

  // useEffect(() => {
  //   getVotos().then((response: any) =>{
  //     setVotos(response?.data)
  //     console.log(votos, response?.data)
  //   })
  // }, []);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/votos" element={<Votos/>}/>
        <Route path="/web" element={<Web/>}/>
      </Routes>
    </>
  );
}

export default App;
