import axios from 'axios';

const config = {
    headers: {
        'Authorization': 'Bearer ' + import.meta.env.VITE_API_TOKEN
    }
}

export const getVotos = async () => {
    const _votos = await axios.get(import.meta.env.VITE_API_ENDPOINT, config)
    return _votos?.data
}

export const sendVoto = (data: any) => {
    const _data = {
        "data": {
          "dni": data?.dni,
          "voto": data?.voto.toLowerCase()
        }
    }
    return axios.post(import.meta.env.VITE_API_ENDPOINT, _data ,config)
}