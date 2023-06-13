import { CategoryScale, Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { getBloquesVotos } from "../utils/functions/chartFunctions";


Chart.register(CategoryScale);

export default function VotosPactosChart({votos}: any) {
  
    const labels = ['BLOQUE DERECHA','BLOQUE IZQUIERDA', 'ABSTENCIONES'];

    const size = window.innerWidth >= 800 
        ? '700px' 
        : (window.innerWidth < 800 && window.innerWidth >= 400)
            ? '350px'
            : '250px'
    
    const data = {
    labels: labels,
    datasets: [{
        axis: 'y', 
        data: getBloquesVotos(votos),
        fill: false,
        backgroundColor: [
        'rgba(3,137,124, 0.5)',
        'rgba(153,51,101, 0.4)',
        'rgba(201, 203, 207, 0.3)'
        ],
        borderColor: [
        'rgba(3,137,124, 0.2)',
        'rgba(153,51,101, 0.2)',
        'rgba(201, 203, 207, 0.2)'
        ],
        borderWidth: 1
    }]
    };

    const options: any =  {
            plugins: {
                legend: false,
            }
        }

    return (
        <Bar
            data={data} options={options} style={{position:'relative', height:`${size}`, width:`${size}`}}
      />
  )
}
