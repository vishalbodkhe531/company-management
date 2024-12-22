import { useState } from "react";

const mockAttendanceData = [
  {
    id: 1,
    date: "2024-12-01",
    employees: [
      { name: "John Doe", status: "Present" },
      { name: "Alice Johnson", status: "Late" },
      { name: "Jane Smith", status: "Absent" },
      { name: "John Doe", status: "Present" },
      { name: "Alice Johnson", status: "Late" },
      { name: "Jane Smith", status: "Absent" },
      { name: "Jane Smith", status: "Absent" },
      { name: "John Doe", status: "Present" },
      { name: "Alice Johnson", status: "Late" },
    ],
  },
  {
    id: 2,
    date: "2024-12-02",
    employees: [
      { name: "Mark Brown", status: "Present" },
      { name: "Sara White", status: "Absent" },
      { name: "Chris Black", status: "Late" },
      { name: "Jane Smith", status: "Absent" },
      { name: "Alice Johnson", status: "Late" },
      { name: "John Doe", status: "Present" },
      { name: "Jane Smith", status: "Absent" },
      { name: "John Doe", status: "Present" },
      { name: "Alice Johnson", status: "Late" },
    ],
  },
];

const EmployeeAttendance = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleStatusClick = (status: string, date: string) => {
    setSelectedStatus(status);
    setSelectedDate(date);
  };

  const filteredEmployees = mockAttendanceData
    .find((data) => data.date === selectedDate)
    ?.employees.filter((emp) => emp.status === selectedStatus);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Attendance</h1>

      {/* Attendance Table */}
      <div className="overflow-x-auto mb-6">
        <table className="table-auto w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-4 py-2">Date</th>
              <th className="border border-gray-700 px-4 py-2">Present</th>
              <th className="border border-gray-700 px-4 py-2">Absent</th>
              <th className="border border-gray-700 px-4 py-2">Late</th>
            </tr>
          </thead>
          <tbody>
            {mockAttendanceData.map((data) => (
              <tr key={data.id} className="bg-gray-800 hover:bg-gray-700">
                <td className="border border-gray-700 px-4 py-2">
                  {data.date}
                </td>
                {["Present", "Absent", "Late"].map((status) => (
                  <td
                    key={status}
                    onClick={() => handleStatusClick(status, data.date)}
                    className={`border border-gray-700 px-4 py-2 cursor-pointer ${
                      status === "Present"
                        ? "text-green-400"
                        : status === "Absent"
                        ? "text-red-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {status}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Employee List Section */}
      {selectedStatus && selectedDate && (
        <div className="bg-gray-800 p-4 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-3">
            Employees ({selectedStatus}) on {selectedDate}
          </h2>
          {filteredEmployees && filteredEmployees.length > 0 ? (
            <ul className="space-y-2">
              {filteredEmployees.map((emp, index) => (
                <li
                  key={index}
                  className="bg-gray-700 p-3 rounded shadow hover:bg-gray-600"
                >
                  {emp.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No employees found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EmployeeAttendance;
