import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

// Black theme colors
export const gridColor = "rgba(255, 255, 255, 0.2)";
export const textColor = "#fff";

// Bar Chart: Total Projects and Completed Projects
interface BarChartProps {
  totalProjects: number[];
  completedProjects: number[];
  labels?: string[];
}

export const BarChart = ({
  totalProjects = [],
  completedProjects = [],
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
}: BarChartProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: gridColor,
        },
        ticks: {
          color: textColor,
        },
      },
      x: {
        grid: {
          color: gridColor,
        },
        ticks: {
          color: textColor,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Total Projects",
        data: totalProjects,
        backgroundColor: "#4F46E5",
      },
      {
        label: "Completed Projects",
        data: completedProjects,
        backgroundColor: "#10B981",
      },
    ],
  };

  return <Bar options={options} data={data} style={{ marginTop: "10rem" }} />;
};
