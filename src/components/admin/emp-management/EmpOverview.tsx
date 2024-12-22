import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const EmployeeOverview = () => {
  // Data for Pie Chart
  const pieData = {
    labels: ["Active", "On Leave", "Absent"],
    datasets: [
      {
        data: [200, 15, 5],
        backgroundColor: ["#22C55E", "#FACC15", "#EF4444"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          boxWidth: 60,
          padding: 29,
          font: {
            size: 14,
            color: "#FFFFFF", // Change legend text color to white
          },
          color: "#FFFFFF", // Set the color for legend text
        },
        position: "right" as const,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: "#FFFFFF", // Change y-axis ticks (numbers) color to white
        },
      },
      x: {
        ticks: {
          color: "#FFFFFF", // Change x-axis ticks (numbers) color to white
        },
      },
    },
  };

  // Data for Line Chart
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Employees", // Change the label color here
        data: [150, 160, 170, 180, 190, 200, 230],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        fill: true,
        borderWidth: 2, // Optional: increase the border width for better visibility
        tension: 0.3, // Optional: smooth the line
      },
    ],
  };

  const lineOptions = {
    plugins: {
      tooltip: {
        titleColor: "#FFFFFF", // Change tooltip title color to white
        bodyColor: "#FFFFFF", // Change tooltip body text color to white
      },
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: "#FFFFFF", // Change y-axis ticks (numbers) color to white
        },
      },
      x: {
        ticks: {
          color: "#FFFFFF", // Change x-axis ticks (numbers) color to white
        },
      },
    },
  };

  // Data for Bar Chart
  const barData = {
    labels: ["Engineering", "HR", "Sales", "Marketing", "Finance", "Support"],
    datasets: [
      {
        label: "Employees per Department", // Change the label color here
        data: [50, 20, 30, 25, 15, 10],
        backgroundColor: [
          "#6366F1",
          "#10B981",
          "#F97316",
          "#A855F7",
          "#EC4899",
          "#FACC15",
        ],
        borderWidth: 1,
        borderColor: "#FFFFFF", // Optional: Set the border color for bars to white
      },
    ],
  };

  const barOptions = {
    plugins: {
      tooltip: {
        titleColor: "#FFFFFF", // Change tooltip title color to white
        bodyColor: "#FFFFFF", // Change tooltip body text color to white
      },
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: "#FFFFFF", // Change y-axis ticks (numbers) color to white
        },
      },
      x: {
        ticks: {
          color: "#FFFFFF", // Change x-axis ticks (numbers) color to white
        },
      },
    },
  };

  return (
    <div className="p-6 space-y-6 bg-black text-white h-[100vh] ">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Employee Overview</h1>
        <p className="text-gray-400">Quick insights into employee data</p>
      </div>

      {/* Graphs */}
      <div className="flex flex-col gap-10">
        {/* Pie Chart */}
        <div className="bg-gray-800 shadow rounded-md p-4 text-center flex justify-center">
          <div className="w-[60%]">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Attendance Overview
            </h2>
            <div className="w-full h-[50vh] flex justify-center mt-6">
              <Pie data={pieData} options={pieOptions} />
            </div>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-gray-800 shadow rounded-md p-4 text-center">
          <h2 className="text-2xl font-bold my-10 text-white">
            Employee Growth
          </h2>
          <div className="w-full h-[50vh] flex justify-center">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-800 shadow rounded-md p-4 text-center ">
          <h2 className="text-2xl font-bold my-10 text-white">
            Department Distribution
          </h2>
          <div className="w-full h-[50vh] flex justify-center">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOverview;
