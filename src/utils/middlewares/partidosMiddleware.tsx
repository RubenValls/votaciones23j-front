import axios from "axios";
import { config } from "./votosMiddleware";

export const getPartidos = async () => {
    const _votos = await axios.get(import.meta.env.VITE_API_ENDPOINT_PARTIDOS, config);
    return _votos?.data;
};