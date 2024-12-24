import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableCell, TableRow } from "@/components/ui/table";

const EmployeePayroll = () => {
  const payrollData = [
    {
      id: 1,
      name: "John Doe",
      basicSalary: 50000,
      bonuses: 5000,
      deductions: 2000,
    },
    {
      id: 2,
      name: "Jane Smith",
      basicSalary: 60000,
      bonuses: 8000,
      deductions: 3000,
    },
  ];

  return (
    <div className="bg-gray-800 text-white p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Employee Payroll</h1>
      <Table className="table-auto w-full border-collapse border border-gray-700 ">
        <thead>
          <tr className="bg-gray-800">
            <TableCell className="px-4 py-2 border border-gray-700">
              #
            </TableCell>
            <TableCell className="px-4 py-2 border border-gray-700">
              Employee Name
            </TableCell>
            <TableCell className="px-4 py-2 border border-gray-700">
              Basic Salary
            </TableCell>
            <TableCell className="px-4 py-2 border border-gray-700">
              Bonuses
            </TableCell>
            <TableCell className="px-4 py-2 border border-gray-700">
              Deductions
            </TableCell>
            <TableCell className="px-4 py-2 border border-gray-700">
              Net Pay
            </TableCell>
          </tr>
        </thead>
        <tbody>
          {payrollData.map((employee) => {
            const netPay =
              employee.basicSalary + employee.bonuses - employee.deductions;
            return (
              <TableRow key={employee.id} className="hover:bg-gray-700">
                <TableCell className="px-4 py-2 border border-gray-700">
                  {employee.id}
                </TableCell>
                <TableCell className="px-4 py-2 border border-gray-700">
                  {employee.name}
                </TableCell>
                <TableCell className="px-4 py-2 border border-gray-700">{`$${employee.basicSalary}`}</TableCell>
                <TableCell className="px-4 py-2 border border-gray-700">{`$${employee.bonuses}`}</TableCell>
                <TableCell className="px-4 py-2 border border-gray-700">{`$${employee.deductions}`}</TableCell>
                <TableCell className="px-4 py-2 border border-gray-700 font-bold">{`$${netPay}`}</TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </Table>

      <h2 className="text-xl font-bold mt-6 mb-4">Add / Update Payroll</h2>
      <form className="space-y-4 ">
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="name">Employee Name</Label>
            <Input id="name" placeholder="Enter employee name" />
          </div>
          <div className="flex-1">
            <Label htmlFor="basicSalary">Basic Salary</Label>
            <Input
              id="basicSalary"
              type="number"
              placeholder="Enter basic salary"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="bonuses">Bonuses</Label>
            <Input id="bonuses" type="number" placeholder="Enter bonuses" />
          </div>
          <div className="flex-1">
            <Label htmlFor="deductions">Deductions</Label>
            <Input
              id="deductions"
              type="number"
              placeholder="Enter deductions"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Save Payroll
        </Button>
      </form>
    </div>
  );
};

export default EmployeePayroll;
