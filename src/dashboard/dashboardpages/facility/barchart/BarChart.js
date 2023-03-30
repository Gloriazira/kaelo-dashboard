import "./barchart.css";
import Chart from "react-apexcharts";


export default function BarChart() {


    return (
        <div className="chart mx-2">
            <Chart
                className="bar"
                type="bar"
                width={600}
                // height={}
                series={[
                    {
                        name: "Paid",
                        data: [445, 600, 300, 0, 0, 0],
                        color: '#17E383'
                    },
                    {
                        name: "Unpaid",
                        data: [355, 200, 500, 800, 650, 550],
                        color: '#E0D4F3'
                    }
                ]}

                options={{
                    dataLabels: {
                        enabled: false
                    },
                    chart: {
                        stacked: true,
                        toolbar: {
                            show: false,
                        },
                        animations: {
                            enabled: false
                        },

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
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '25%',
                            borderRadius: 10
                        }
                    },
                    stroke: {
                        show: false,
                        curve: 'smooth',
                    },
                    xaxis: {

                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

                        crosshairs: {
                            show: false,
                        }
                    },
                    yaxis: {
                        categories: [],
                        min: 0,
                        max: 800,

                    },
                    legend: {
                        position: 'bottom',
                        show: false
                    },
                    dataLabels: {
                        enabled: false,
                    },

                    grid: {
                        show: true,
                        xaxis: {
                            lines: {
                                show: false
                            }
                        },
                        yaxis: {
                            lines: {
                                show: true
                            }
                        }

                    }

                }}
            />


            <div className="bar-chart-status">
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