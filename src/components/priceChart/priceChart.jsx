// priceChart.jsx
import { Chart as ChartJS } from "chart.js/auto"
import { Line } from "react-chartjs-2"

let labels=[]
for(let i=1;i<=32;i++){
    labels.push(`${i}/04/2025`)
}
let data=[]
for(let i=1;i<=31;i++){
    data.push(49000+Math.floor(Math.random()*2000))
}

function PriceChart(){
    return <div style={{width:"100%"}}>
        <Line
        data={ {
            labels: labels,
            datasets: [
              {
                label: 'Price',
                data: data,
                borderColor: "#1783FF",
                fill: false,
                stepped: true,
              }
            ]
          }}
        />
    </div> 
}

export default PriceChart