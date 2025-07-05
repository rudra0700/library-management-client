import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/libraryApi";
import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

const Books = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const [deleteBook] = useDeleteBookMutation()
  const books = data?.data || [];

  const handleDelete = async (bookId : string) => {
      await deleteBook(bookId).unwrap();
      toast("Book deleted successfully")
  };

    if (isLoading) return <div className="text-center mt-10">Loading books...</div>;
    if (!books.length) return <div className="text-center mt-10 text-gray-500">No books found.</div>;
  return (
    <div className="p-6 max-w-7xl mx-auto mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book: { _id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; author: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; genre: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; isbn: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; copies: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => {
          return (
            <Card key={book._id} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-lg">{book.title}</CardTitle>
                <p className="text-md font-bold text-gray-500">{book.author}</p>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                <p>
                  <strong>Genre:</strong> {book.genre}
                </p>
                <p>
                  <strong>ISBN:</strong> {book.isbn}
                </p>
                <p>
                  <strong>Copies:</strong> {book.copies}
                </p>
                <p>
                  <strong>Available:</strong> {book.copies ? "True" : "False"}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link to={`/editBook/${book._id}`}>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </Link>
                <Dialog>
                  <form>
                    <DialogTrigger asChild>
                      <Button variant="outline">Delete</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        {/* <DialogDescription>
                          Make changes to your profile here. Click save when
                          you&apos;re done.
                        </DialogDescription> */}
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                         <Button variant="destructive" onClick={() => handleDelete(book._id as string)}>Yes, Delete</Button>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>
                   <Link to={`/borrow/${book._id}`}>
                        <Button size="sm" variant="outline">{book?.copies === 0  ? "Unavailable" : "Borrow" }</Button>
                    </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
