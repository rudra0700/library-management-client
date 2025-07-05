
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { useBorrowBookMutation } from "@/redux/api/libraryApi";

const BorrowForm = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [borrowBook] = useBorrowBookMutation();
  const [form, setForm] = useState({ quantity: 1, dueDate: "" });

  const handleChange = (e: { target: { name: any; value: any; }; }) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await borrowBook({ bookId, data: { ...form, quantity: Number(form.quantity) } }).unwrap();
      toast("Book borrowed successfully");
      navigate("/borrow-summary");
    } catch {
      toast("Failed to borrow book");
    }
  };

  return (
    <form className="p-6 space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">Borrow Book</h2>
      <Input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" />
      <Input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
      <Button type="submit">Borrow</Button>
    </form>
  );
};

export default BorrowForm;
