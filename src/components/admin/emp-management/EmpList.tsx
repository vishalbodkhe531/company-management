import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const EmployeeList = () => {
  // Example employees data
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

  const handleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleEdit = (id: number) => {
    console.log(`Editing details for employee with id ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Deleting employee with id ${id}`);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-6">Employee List</h2>
      <div className="space-y-4">
        {employees.map((employee) => (
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
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
