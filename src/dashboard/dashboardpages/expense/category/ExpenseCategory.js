import './expensecategory.css';
import Chart from "react-apexcharts";

export default function ExpenseCategory() {
    const options = {
        series: [234345, 32345],
        labels: ["Loan", "Spent"],
        colors: ["#17E383", "#E0D4F3"],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        stroke: {
            show: false,
            curve: 'smooth',
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
            donut: {
                expandOnClick: true,
            }
        }
    }



    const series = [234345, 32345]
    return (
        <div className="d-flex flex-column expense-category">

            <div className="pie my-4">
                <div className='d-flex align-items-center justify-content-around'>
                    <Chart
                        options={options}
                        series={series}
                        type="donut"
                        width="100%"
                        height={200}
                    />
                    <div className="pie-chart-status">
                        <div className="title d-flex align-items-center justify-content-center my-4"> Loan Balance</div>
                        <div className="indicator d-flex align-items-center my-2">
                            <span className="dot active"></span>
                            <p>Loan - <span style={{ color: "#333333", fontWeight: "600" }}>$234,345</span></p>
                        </div>
                        <div className="indicator d-flex align-items-center my-2">
                            <span className="dot"></span>
                            <p>Spent - <span style={{ color: "#333333", fontWeight: "600" }}>$32,345</span></p>
                        </div>
                    </div>

                </div>
            </div>

            <hr />

            <div className="bar " >
                <p>Spent Category</p>
                <Chart
                    className="bar my-2"
                    type="bar"
                    width={600}
                    series={[
                        {
                            name: "Paid",
                            data: [300, 150, 200, 50, 300],
                            color: '#D9D9D9'
                        },
                    ]}

                    options={{
                        dataLabels: {
                            enabled: false
                        },
                        chart: {
                            stacked: false,
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
                            }
                        },
                        stroke: {
                            show: false,
                            curve: 'smooth',
                        },
                        xaxis: {

                            categories: ['Solar Panel', 'Labour', 'Battery', 'Writing', 'Repair'],
                            color: '#D9D9D9',
                            crosshairs: {
                                show: false 
                            }
                        },
                        yaxis: {
                            categories: [],
                            min: 0,
                            max: 400,

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
            </div>

        </div>
    )
}