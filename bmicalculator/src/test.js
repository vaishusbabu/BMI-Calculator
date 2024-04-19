
// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// function BmiCalculator() {
//     const [values, setValues] = useState({
//         height: "",
//         weight: ""
//     });
//     const [bmi, setBmi] = useState('');
//     const [message, setMessage] = useState('');
//     const [messageColor, setMessageColor] = useState('');

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setValues(prevState => ({
//             ...prevState,
//             [id]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const { height, weight } = values;

//         if (height && weight) {
//             const heightInMeters = height / 100; // Convert height to meters
//             const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//             setBmi(bmiValue);

//             let message = '';
//             let messageColor = '';
//             if (bmiValue < 18.5) {
//                 message = "Underweight";
//                 messageColor = 'red';
//             } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//                 message = "Healthy";
//                 messageColor = 'green';
//             } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
//                 message = "Overweight";
//                 messageColor = 'orange';
//             } else {
//                 message = "Obesity";
//                 messageColor = 'red';
//             }

//             setMessage(message);
//             setMessageColor(messageColor);

//             // Update series and options based on BMI result
//             const series = [{
//                 data: [bmiValue],
//                 name: 'BMI'
//             }];

//             const options = {
//                 chart: {
//                     type: 'pie',
//                 },
//                 labels: ['BMI'],
//                 colors: [messageColor],
//                 responsive: [{
//                     breakpoint: 480,
//                     options: {
//                         chart: {
//                             width: 200
//                         },
//                         legend: {
//                             position: 'bottom'
//                         }
//                     }
//                 }]
//             };

//             setChartData({ series, options });
//         }
//     };

//     const [chartData, setChartData] = useState({ series: [], options: {} });

//     return (
//         <div>
//             <div className="formContainer">
//                 <div className="formWrapper">
//                     <span className="title" logo>
//                         BMI Calculator
//                     </span>
//                     <form onSubmit={handleSubmit}>
//                         <div class="mb-3">
//                             <label for="exampleInputEmail1" class="form-label">Enter Your Height in (cm)</label>
//                             <input type="text"
//                                 class="form-control"
//                                 id="height"
//                                 value={values.height}
//                                 onChange={handleChange} />
//                         </div>
//                         <div class="mb-3">
//                             <label for="exampleInputPassword1" class="form-label">Enter Your Weight in (kg)</label>
//                             <input type="text"
//                                 class="form-control"
//                                 id="weight"
//                                 onChange={handleChange}
//                                 value={values.weight} />
//                         </div>
//                         <button type="submit" class="btn btn-dark">Calculate</button>
//                     </form>
//                     <p> {bmi && `Your BMI is: ${bmi}`}</p>
//                     <p style={{ color: messageColor, fontSize: "22px" }}>{message && `You are: ${message}`}</p>
//                     <div id="chart" style={{ width: '100%', height: '400px' }}>
//                         {chartData.series.length > 0 && chartData.options && (
//                             <ReactApexChart options={chartData.options} series={chartData.series} type="pie" />
//                         )}
//                         {chartData.series.length === 0 && <p></p>}
//                     </div>
//                     <div id="html-dist"></div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BmiCalculator;
