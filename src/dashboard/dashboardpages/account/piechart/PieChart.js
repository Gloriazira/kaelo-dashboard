import "./piechart.css";
import Chart from "react-apexcharts";


export default function PieChart() {
    const options = {
        // series: [234345, 32345],
        labels: ["Paid", "Unpaid"],
        colors: ["#17E383", "#E0D4F3"],
        dataLabels: {
            enabled: false
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                }
            },
            active: {
                filter: {
                    type: 'none',
                }
            },
        },
        legend: {
            show: false
        },
        stroke: {
            show: false,
            curve: 'smooth',
        },
       
        plotOptions: {
            donut: {
                expandOnClick: true,
            }
        }
    }

    const series = [234345, 32345]


    return (
        <div className="chart mx-2">
            <div className="pie-chart-image mt-5">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="100%"
                    height={300}
                />
            </div>


            <div className="pie-chart-status">
                <div className="title d-flex align-items-center justify-content-center my-4"> paid Vs Unpaid </div>
                <div className="indicator d-flex align-items-center my-2">
                    <span className="dot active"></span>
                    <p>Paid - <span style={{ color: "#333333", fontWeight: "600" }}>$234,345</span></p>
                </div>
                <div className="indicator d-flex align-items-center my-2">
                    <span className="dot"></span>
                    <p>UnPaid - <span style={{ color: "#333333", fontWeight: "600" }}>$32,345</span></p>
                </div>
            </div>
        </div>
    )
}