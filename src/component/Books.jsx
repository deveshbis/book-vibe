import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";


const Books = () => {

    const books = useLoaderData();
    console.log(books);
    return (
        <div className="mt-12">
            <h2 className="text-5xl font-bold text-center mb-10">Books</h2>
            <section className="py-6 sm:py-1">

                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        books.map(book => (<BookCard book={book} key={book.id}></BookCard>))
                    }
                    

                </div>

            </section>
        </div>
    );
};

export default Books;