import LineChart from "@/components/charts/LineChart";
import { DoughnutChart } from "../../charts/DoughnutChart";
import { Pie } from "react-chartjs-2";

export const gridColor = "rgba(255, 255, 255, 0.2)";
export const textColor = "#fff";

// Budget Used Percentage=(
//   50,000
//   20,000
//   ​
//    )×100=0.4×100=40%

function ProjectOverview() {
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

  // lign-chart options
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [10, 50, 15, 30, 25, 40],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Makes the line smooth
        textColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#fff", // Set legend text color
          font: {
            weight: "bold", // Apply font-bold
            size: 12, // Set font size (text-xl equivalent)
          },
        },
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
        color: "#fff",
        font: {
          weight: "bold", // Apply font-bold
          size: 12, // Set font size (text-xl equivalent)
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

  return (
    <section>
      <h3 className="text-lg font-bold mb-4 ">Project Overview</h3>
      <div className="flex flex-col space-y-14 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-800 rounded h-[10rem] flex flex-row justify-between">
            <div className="">
              <h4 className="text-lg font-semibold">Active Projects</h4>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="">
              <DoughnutChart
                activeProjects={35}
                budgetUsed={65}
                cutout="80%"
                showLabels={false}
                containerStyle={{
                  marginTop: "0",
                  justifyContent: "center",
                  width: "100%",
                  height: "7rem",
                }}
              />
            </div>
          </div>
          <div className="p-4 bg-gray-800 rounded h-[10rem] flex flex-row justify-between">
            <div className="">
              <h4 className="text-lg font-semibold">Completed Tasks</h4>
              <p className="text-2xl font-bold">243</p>
            </div>
            <div className="">
              <DoughnutChart
                activeProjects={35}
                cutout="80%"
                showLabels={false}
                containerStyle={{
                  marginTop: "0",
                  justifyContent: "center",
                  width: "100%",
                  height: "7rem",
                }}
              />
            </div>
          </div>
          <div className="p-4 bg-gray-800 rounded h-[10rem] flex flex-row justify-between">
            <div className="">
              <h4 className="text-lg font-semibold">Budget Used</h4>
              <p className="text-2xl font-bold">$45,000</p>
            </div>
            <div className="">
              <DoughnutChart
                activeProjects={35}
                budgetUsed={15}
                cutout="80%"
                showLabels={false}
                containerStyle={{
                  marginTop: "0",
                  justifyContent: "center",
                  width: "100%",
                  height: "7rem",
                }}
              />
            </div>
          </div>
          <div className="p-4 bg-gray-800 rounded h-[10rem] flex flex-row justify-between">
            <div className="">
              <h4 className="text-lg font-semibold">Total Projects</h4>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div className="">
              <DoughnutChart
                // activeProjects={32}
                budgetUsed={15}
                cutout="80%"
                showLabels={false}
                containerStyle={{
                  marginTop: "0",
                  justifyContent: "center",
                  width: "100%",
                  height: "7rem",
                }}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-800 shadow rounded-md p-4 text-center flex justify-center">
          <LineChart data={data} options={options} />
        </div>
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
      </div>
    </section>
  );
}

export default ProjectOverview;
