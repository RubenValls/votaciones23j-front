import { useEffect, useState } from "react";
import "./App.css";
import { getVotos } from "./middlewares/votosMiddleware";
import Navbar from "./components/Navbar";

function App() {
  const [votos, setVotos] = useState(null);

  useEffect(() => {
    getVotos().then((response: any) =>{
      setVotos(response?.data)
      console.log(votos, response?.data)
    })
  }, []);

  return (
    <>
      <Navbar/>
    </>
  );
}

export default App;
