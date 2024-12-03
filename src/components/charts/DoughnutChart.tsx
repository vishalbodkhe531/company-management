import { ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { textColor } from "./Chart";

interface DoughnutChartProps {
  activeProjects?: number; // Optional
  budgetUsed?: number; // Optional
  cutout?: string | number; // Allow custom cutout size
  containerStyle?: React.CSSProperties; // Allow custom container styles
  showLabels?: boolean; // New prop to toggle labels
}

export const DoughnutChart = ({
  activeProjects = 0, // Default value
  budgetUsed = 0, // Default value
  cutout = "50%",
  containerStyle = {},
  showLabels = true, // Default to show labels
}: DoughnutChartProps) => {
  const doughnutData = {
    labels: showLabels ? ["Active Projects", "Budget Used"] : [], // Conditionally add labels
    datasets: [
      {
        data: [activeProjects, budgetUsed],
        backgroundColor: ["#6366F1", "#F87171"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: showLabels, // Only show legend if labels are enabled
        position: "bottom",
        labels: {
          color: textColor,
        },
      },
    },
    cutout,
  };

  return (
    <div
      style={{
        width: "100%",
        height: "30rem",
        marginTop: "14rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...containerStyle,
      }}
    >
      <Doughnut data={doughnutData} options={options} />
    </div>
  );
};
