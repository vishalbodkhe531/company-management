import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Payroll() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
      companyName: "Company A",
      employeeName: "Karan",
      position: "Manager",
      salary: "$3,000",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
      companyName: "Company B",
      employeeName: "Shubham",
      position: "Developer",
      salary: "$2,500",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
      companyName: "Company C",
      employeeName: "Nitesh",
      position: "Designer",
      salary: "$2,800",
    },
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
      companyName: "Company A",
      employeeName: "Ram",
      position: "Manager",
      salary: "$3,000",
    },
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
      companyName: "Company A",
      employeeName: "Pavan",
      position: "Manager",
      salary: "$3,000",
    },
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
      companyName: "Company A",
      employeeName: "Rohan",
      position: "Manager",
      salary: "$3,000",
    },
  ];

  return (
    <div className="h-[70vh] flex justify-center w-full">
      <div className="flex w-full justify-center items-center h-full">
        {/* Make the table container scrollable */}
        <div className="w-full overflow-x-auto px-4">
          <Table className="table-auto border-collapse text-white w-full min-w-[700px] h-[50vh]">
            <TableCaption className="text-gray-300">
              A list of your recent invoices and employee management details.
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-gray-800 md:text-base font-bold text-gray-200">
                <TableHead className="px-2 md:px-4 py-2 text-[1.20rem]">
                  Invoice
                </TableHead>
                <TableHead className="px-2 md:px-4 py-2 ">Status</TableHead>
                <TableHead className="px-2 md:px-4 py-2 text-[1.20rem] ">
                  Method
                </TableHead>
                <TableHead className="px-2 md:px-4 py-2 text-[1.20rem] ">
                  Company
                </TableHead>
                <TableHead className="px-2 md:px-4 py-2 text-[1.20rem] ">
                  Employee
                </TableHead>
                <TableHead className="px-2 md:px-4 py-2 text-[1.20rem] ">
                  Position
                </TableHead>
                <TableHead className="px-2 md:px-4 py-2 text-[1.20rem] ">
                  Salary
                </TableHead>
                <TableHead className="px-2 md:px-4 py-2 text-[1.20rem]  text-right">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice, index) => (
                <TableRow
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-600  md:text-sm"
                >
                  <TableCell className="px-2 md:px-4 py-2 font-medium text-[0.99rem]">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell className="px-2 md:px-4 py-2 text-[0.99rem]">
                    {invoice.paymentStatus}
                  </TableCell>
                  <TableCell className="px-2 md:px-4 py-2 text-[0.99rem]">
                    {invoice.paymentMethod}
                  </TableCell>
                  <TableCell className="px-2 md:px-4 py-2 text-[0.99rem]">
                    {invoice.companyName}
                  </TableCell>
                  <TableCell className="px-2 md:px-4 py-2 text-[0.99rem]">
                    {invoice.employeeName}
                  </TableCell>
                  <TableCell className="px-2 md:px-4 py-2 text-[0.99rem]">
                    {invoice.position}
                  </TableCell>
                  <TableCell className="px-2 md:px-4 py-2 text-[0.99rem]">
                    {invoice.salary}
                  </TableCell>
                  <TableCell className="px-2 md:px-4 py-2 text-right text-[0.99rem]">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow className="bg-gray-800">
                <TableCell
                  colSpan={7}
                  className="px-4 py-2 text-[0.99rem] font-semibold text-gray-200"
                >
                  Total
                </TableCell>
                <TableCell className="px-4 py-2 text-right font-semibold text-gray-200 text-[0.99rem]">
                  $2,500.00
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Payroll;
