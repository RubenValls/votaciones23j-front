// import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio";
import Votos from "./pages/votos/Votos";
import Web from "./pages/web/Web";
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Navbar/>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/votos" element={<Votos/>}/>
          <Route path="/web" element={<Web/>}/>
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
