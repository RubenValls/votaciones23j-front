import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { getBackgroundColor, getPartidos, getVotos } from '../utils/functions/chartFunctions';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function VotosChart({votos}: any) {

  const [partidos, setPartidos] = useState(getPartidos(votos));
  const [votosPorPartido, setVotosPorPartido] = useState(getVotos(votos));

  useEffect(() => {
    setPartidos(getPartidos(votos));
    setVotosPorPartido(getVotos(votos))
  }, [votos]);

    const size = window.innerWidth >= 800 
        ? '700px' 
        : (window.innerWidth < 800 && window.innerWidth >= 400)
            ? '350px'
            : '250px'

    const data = {
        labels: partidos,
        datasets: [
          {
            label: 'Votos',
            data: votosPorPartido,
            backgroundColor: [
              getBackgroundColor(partidos[0]),
              getBackgroundColor(partidos[1]),
              getBackgroundColor(partidos[2]),
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              getBackgroundColor(partidos[0]),
              getBackgroundColor(partidos[1]),
              getBackgroundColor(partidos[2]),
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderWidth: 2,
          },
        ],
      };

    return (
        <Pie data={data} style={{position:'relative', height:`${size}`, width:`${size}`}}/>
  )
}
