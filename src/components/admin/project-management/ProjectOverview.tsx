// import React, { useEffect, useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   BarElement,
//   RadialLinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line, Pie, Doughnut, Bar, Radar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   BarElement,
//   RadialLinearScale,
//   Tooltip,
//   Legend
// );

// export default function ProjectOverview() {
//   const [backendData, setBackendData] = useState({
//     activeProjects: 0,
//     completedTasks: 0,
//     budgetUsed: 0,
//     totalProjects: 0,
//     salesData: [10, 50, 15, 30, 25, 40],
//     attendanceData: [200, 15, 5],
//   });

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("/api/project-overview");
//         const data = await response.json();
//         setBackendData({
//           activeProjects: data.activeProjects || 0,
//           completedTasks: data.completedTasks || 0,
//           budgetUsed: data.budgetUsed || 0,
//           totalProjects: data.totalProjects || 0,
//           salesData: data.salesData || [10, 50, 15, 30, 25, 40],
//           attendanceData: data.attendanceData || [200, 15, 5],
//         });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   // Chart configurations
//   const lineData = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         label: "Monthly Sales",
//         data: backendData.salesData,
//         borderColor: "rgba(255, 99, 132, 1)",
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const pieData = {
//     labels: ["Active", "On Leave", "Absent"],
//     datasets: [
//       {
//         data: backendData.attendanceData,
//         backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const barData = {
//     labels: ["Product A", "Product B", "Product C", "Product D"],
//     datasets: [
//       {
//         label: "Sales Count",
//         data: [50, 75, 100, 125],
//         backgroundColor: ["#4CAF50", "#3F51B5", "#FFC107", "#F44336"],
//       },
//     ],
//   };

//   const radarData = {
//     labels: ["Quality", "Speed", "Reliability", "Price", "Customer Service"],
//     datasets: [
//       {
//         label: "Product Performance",
//         data: [3, 4, 4, 2, 5],
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//       },
//     ],
//   };

//   const chartOptions = {
//     plugins: {
//       legend: {
//         labels: {
//           color: "#FFFFFF",
//           font: {
//             size: 14,
//             weight: "bold",
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: "#FFFFFF",
//         },
//       },
//       y: {
//         ticks: {
//           color: "#FFFFFF",
//         },
//       },
//     },
//   };

//   return (
//     <section>
//       <h3 className="text-lg font-bold mb-4">Project Overview</h3>
//       <div className="flex flex-col space-y-8">
//         {/* Line Chart */}
//         <div className="bg-gray-800 shadow rounded-md p-4 text-center">
//           <h4 className="text-xl font-bold mb-4 text-white">Line Chart</h4>
//           <div style={{ height: "250px" }}>
//             <Line data={lineData} />
//           </div>
//         </div>

//         {/* Pie Chart */}
//         <div className="bg-gray-800 shadow rounded-md p-4 text-center">
//           <h4 className="text-xl font-bold mb-4 text-white">Pie Chart</h4>
//           <div style={{ height: "550px" }}>
//             <Pie data={pieData} />
//           </div>
//         </div>

//         {/* Doughnut Chart */}
//         <div className="bg-gray-800 shadow rounded-md p-4 text-center">
//           <h4 className="text-xl font-bold mb-4 text-white">Doughnut Chart</h4>
//           <div style={{ height: "550px" }}>
//             <Doughnut data={pieData} />
//           </div>
//         </div>

//         {/* Bar Chart */}
//         <div className="bg-gray-800 shadow rounded-md p-4 text-center">
//           <h4 className="text-xl font-bold mb-4 text-white">Bar Chart</h4>
//           <div style={{ height: "550px" }}>
//             <Bar data={barData} />
//           </div>
//         </div>

//         {/* Radar Chart */}
//         <div className="bg-gray-800 shadow rounded-md p-4 text-center">
//           <h4 className="text-xl font-bold mb-4 text-white">Radar Chart</h4>
//           <div style={{ height: "800px" }}>
//             <Radar data={radarData} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
