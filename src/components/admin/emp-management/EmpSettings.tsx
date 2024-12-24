import { Button } from "@/components/ui/button";
import { useState } from "react";

const EmployeeSettings = () => {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "HR Manager",
      department: "Human Resources",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Alice Johnson",
      position: "Product Designer",
      department: "Design",
      email: "alice@example.com",
      phone: "555-123-4567",
    },
  ];

  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const handleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleEdit = (id: number) => {
    console.log(`Editing details for employee with id ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Deleting employee with id ${id}`);
  };

  // Filter employees based on search query and selected filter
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      employee.position.toLowerCase() === filter.toLowerCase();
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
          <option value="All">All Positions</option>
          <option value="HR Manager">HR Manager</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Product Designer">Product Designer</option>
        </select>
      </div>

      {/* Employee List */}
      <div className="space-y-4">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <div
              key={employee.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-all"
            >
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-white">
                  {employee.name}
                </div>
                <Button
                  onClick={() => handleExpand(employee.id)}
                  className="text-blue-500"
                >
                  {expandedId === employee.id ? "Collapse" : "Expand"}
                </Button>
              </div>
              <div className="text-sm text-white">
                {employee.position} - {employee.department}
              </div>
              {expandedId === employee.id && (
                <div className="mt-4 space-y-2">
                  <div className="text-sm text-white">
                    Email: {employee.email}
                  </div>
                  <div className="text-sm text-white">
                    Phone: {employee.phone}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button
                      onClick={() => handleEdit(employee.id)}
                      className="w-1/3 bg-yellow-500 text-white hover:bg-yellow-400"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(employee.id)}
                      className="w-1/3 bg-red-500 text-white hover:bg-red-400"
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
