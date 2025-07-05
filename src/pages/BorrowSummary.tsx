
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useBorrowSummeryQuery } from "@/redux/api/libraryApi";
import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const BorrowSummary = () => {
  const { data = [], isLoading } = useBorrowSummeryQuery(undefined);
  const borrowSummary = data.data;

  if (isLoading) return <div className="text-center mt-10">Loading summary...</div>;
  if (!borrowSummary.length) return <div className="text-center mt-10 text-gray-500">No borrow data found.</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Borrow Summary</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Book Title</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Total Borrowed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {borrowSummary.map((row: { _id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; isbn: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; totalBorrowed: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
            <TableRow key={row._id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.isbn}</TableCell>
              <TableCell>{row.totalBorrowed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BorrowSummary;
