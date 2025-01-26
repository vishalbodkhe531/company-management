import ToasterComponent, {
  getErrorMessage,
} from "@/components/toaster/Toaster";
import { Button } from "@/components/ui/button";
import {
  useAllEmployeesQuery,
  useDeleteEmpMutation,
} from "@/redux/api/emp-API/EmpAPI";
import { empNotExist } from "@/redux/reducer/EmpReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EmployeeSettings = () => {
  const { data, isLoading, isError } = useAllEmployeesQuery();

  const dispatch = useDispatch();

  const [expandedId, setExpandedId] = useState<string | null>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("select");

  const handleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const [deleteEmp] = useDeleteEmpMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteEmp(id);

    if ("data" in res && res.data) {
      console.log("data : ", res.data);
      dispatch(empNotExist());
      ToasterComponent({
        message: res.data.message,
        description: "Thanks for Login",
        firstLabel: "Close",
      });
    } else if ("error" in res) {
      const errorMessage = getErrorMessage(res.error);
      ToasterComponent({
        message: errorMessage,
        description: "Error while delete employee !!",
        firstLabel: "Close",
      });
    }
  };

  if (isError || !data?.allRequests) {
    return (
      <div className="text-red-500">
        Failed to fetch employee data. Try again later.
      </div>
    );
  }

  const filteredEmployees = data.allRequests.filter((employee) => {
    const matchesSearch =
      employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.skill?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "select" || employee.skill === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-6">Employee List</h2>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-100">Employee Directory</h1>
        <p className="text-gray-400">
          Manage employee information and attendance
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or department..."
          className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="select" defaultValue={"select"}>
            All Skill
          </option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="database">Database Management</option>
          <option value="devops">DevOps</option>
          <option value="docker">Docker</option>
          <option value="kubernetes">Kubernetes</option>
          <option value="aws">AWS</option>
          <option value="azure">Azure</option>
          <option value="gcp">Google Cloud Platform</option>
          <option value="mobile">Mobile Development</option>
          <option value="android">Android</option>
          <option value="flutter">Flutter</option>
          <option value="react_native">React Native</option>

          <option value="ai_ml">AI & Machine Learning</option>
          <option value="nlp">Natural Language Processing</option>
          <option value="computer_vision">Computer Vision</option>

          <option value="cybersecurity">Cybersecurity</option>
          <option value="game_dev">Game Development</option>
          <option value="data_analysis">Data Analysis</option>
          <option value="data_engineering">Data Engineering</option>
        </select>
      </div>

      {/* Employee List */}
      <div className="space-y-6">
        {isLoading ? (
          <div className="text-center text-gray-400">Loading...</div>
        ) : filteredEmployees.length ? (
          filteredEmployees.map((employee) => (
            <div
              key={employee._id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <img
                  src={employee.profilePic || "https://via.placeholder.com/80"}
                  alt={`${employee.firstName}'s profile`}
                  className="w-16 h-16 rounded-full border border-gray-700"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">
                    {employee.firstName} {employee.lastName}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {employee.qualification || "N/A"} |{" "}
                    {employee.skill || "No skills listed"}
                  </p>
                </div>
                <Button
                  onClick={() => handleExpand(employee._id)}
                  className="text-blue-500 text-sm font-semibold"
                >
                  {expandedId === employee._id ? "Collapse" : "Expand"}
                </Button>
              </div>

              {/* Expanded Content */}
              {expandedId === employee._id && (
                <div className="mt-4 space-y-4 border-t border-gray-700 pt-4">
                  <div className="text-sm text-gray-400">
                    <p>
                      <span className="font-semibold text-gray-300">
                        Email:
                      </span>{" "}
                      {employee.email}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-300">
                        Phone:
                      </span>{" "}
                      {employee.phoneNumber || "N/A"}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      onClick={() => handleDelete(employee._id)}
                      className="flex-1 bg-btnOrangeTo text-white hover:bg-red-600 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400">No employees found.</div>
        )}
      </div>
    </div>
  );
};

export default EmployeeSettings;
