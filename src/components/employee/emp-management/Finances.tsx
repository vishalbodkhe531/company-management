import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Finances = () => {
  return (
    <motion.div
      className="max-w-full mx-auto"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-full mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center bg-white p-4 shadow rounded mb-6">
            <h1 className="text-2xl font-bold">
              Employee Payroll & Financials
            </h1>
            <Button variant="default">Logout</Button>
          </header>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Salary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600">$5,000</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Deductions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600">$500</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Net Salary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">$4,500</p>
              </CardContent>
            </Card>
          </div>

          {/* Pay Stubs Table */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Pay Stubs</h2>
            <div className="bg-white shadow rounded">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Pay Period</TableCell>
                    <TableCell>Gross Pay</TableCell>
                    <TableCell>Deductions</TableCell>
                    <TableCell>Net Pay</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Jan 1 - Jan 31</TableCell>
                    <TableCell>$5,000</TableCell>
                    <TableCell>$500</TableCell>
                    <TableCell>$4,500</TableCell>
                    <TableCell>
                      <Button variant="link">View</Button>
                    </TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Finances;
