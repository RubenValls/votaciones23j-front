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