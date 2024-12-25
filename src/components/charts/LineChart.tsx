import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: any; //  refine this type based on your data structure
  options?: any; //  refine this type based on your options structure
}

const LineChart = ({ data, options }: LineChartProps) => {
  return <Line data={data} options={options} />;
};

export default LineChart;
