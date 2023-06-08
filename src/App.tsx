// import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio";
import Votos from "./pages/votos/Votos";
import Web from "./pages/web/Web";
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { getVotos } from "./utils/middlewares/votosMiddleware";

function App() {
  const [votos, setVotos] = useState<JSON[]>([]);

  useEffect(() => {
    getVotos()
      .then((response: any) => {
        return response?.data;
      })
      .then((data: Array<JSON>) => setVotos(data))
      .catch((error: Error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar/>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Inicio votos={votos}/>}/>
          <Route path="/votos" element={<Votos votos={votos} setVotos={setVotos}/>}/>
          <Route path="/web" element={<Web/>}/>
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
