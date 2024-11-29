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
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
      companyName: "Company B",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
      companyName: "Company C",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
      companyName: "Company A",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
      companyName: "Company B",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
      companyName: "Company C",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
      companyName: "Company A",
    },
  ];

  return (
    <div className="flex w-full justify-center items-center">
      <Table className=" table-auto border-collapse text-white">
        <TableCaption className="text-gray-300">
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-800 text-left text-sm font-semibold text-gray-200">
            <TableHead className="px-4 py-2 w-[100px]">Invoice</TableHead>
            <TableHead className="px-4 py-2">Status</TableHead>
            <TableHead className="px-4 py-2">Method</TableHead>
            <TableHead className="px-4 py-2">Company</TableHead>{" "}
            {/* New column for Company */}
            <TableHead className="px-4 py-2 text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.invoice}
              className="border-b border-gray-700 hover:bg-gray-600"
            >
              <TableCell className="px-4 py-2 font-medium">
                {invoice.invoice}
              </TableCell>
              <TableCell className="px-4 py-2">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="px-4 py-2">
                {invoice.paymentMethod}
              </TableCell>
              <TableCell className="px-4 py-2">
                {invoice.companyName} {/* Display the company name */}
              </TableCell>
              <TableCell className="px-4 py-2 text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="bg-gray-800">
            <TableCell
              colSpan={4}
              className="px-4 py-2 text-sm font-semibold text-gray-200"
            >
              Total
            </TableCell>
            <TableCell className="px-4 py-2 text-right font-semibold text-gray-200">
              $2,500.00
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Payroll;
