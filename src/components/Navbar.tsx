import { Link } from "react-router";



const Navbar = () => {
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto mt-4">
            <h2 className="text-2xl font-bold">Library management system</h2>
             <ul className="flex gap-6 font-semibold ">
                <Link to={"/books"}>All Books</Link>
                <Link to={"/addBook"}>Add Books</Link>
                <Link to={"/borrow-summary"}>Borrow Summary</Link>
             </ul>
        </div>
    );
};

export default Navbar;