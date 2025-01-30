import {
  useEmpTrendsQuery,
  useSkillGraphQuery,
} from "@/redux/api/emp-API/EmpAPI";
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
  const { data: skills } = useSkillGraphQuery();
  const { data: trends } = useEmpTrendsQuery();

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
            color: "#FFFFFF",
          },
          color: "#FFFFFF",
        },
        position: "right" as const,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: "#FFFFFF",
        },
      },
      x: {
        ticks: {
          color: "#FFFFFF",
        },
      },
    },
  };

  const lineData = {
    labels: trends?.labels || [],
    datasets: [
      {
        label: "Employees",
        data: trends?.datasets[0]?.data || [],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        fill: true,
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const lineOptions = {
    plugins: {
      tooltip: {
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
      },
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: "#FFFFFF",
        },
      },
      x: {
        ticks: {
          color: "#FFFFFF",
        },
      },
    },
  };

  const barData = {
    labels: skills?.allSkills.map((item) => item._id) || [],
    datasets: [
      {
        label: "totle skills",
        data: skills?.allSkills.map((item) => item.count) || [],
        backgroundColor: [
          "#6366F1",
          "#10B981",
          "#F97316",
          "#A855F7",
          "#EC4899",
          "#FACC15",
        ],
        borderWidth: 1,
        borderColor: "#FFFFFF",
      },
    ],
  };

  const barOptions = {
    plugins: {
      tooltip: {
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
      },
    },
    legend: {
      display: false, // Hide legend
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: "#FFFFFF",
        },
      },
      x: {
        ticks: {
          color: "#FFFFFF",
        },
      },
    },
  };

  return (
    <div className="p-6 space-y-6 bg-black text-white h-[100vh]">
      <div>
        <h1 className="text-2xl font-bold text-white">Employee Overview</h1>
        <p className="text-gray-400">Quick insights into employee data</p>
      </div>
      <div className="flex flex-col gap-10">
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
        <div className="bg-gray-800 shadow rounded-md p-4 text-center">
          <h2 className="text-2xl font-bold my-10 text-white">
            Employee Growth
          </h2>
          <div className="w-full h-[50vh] flex justify-center">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
        <div className="bg-gray-800 shadow rounded-md p-4 text-center">
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
