import BookCard from "./BookCard";
import useBookData from "../Hook/useBookData";
import { useEffect, useState } from "react";

const Books = () => {
    const { data } = useBookData();
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinner(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="mt-12">
            <h2 className="text-5xl font-bold text-center mb-10">Books</h2>
            {spinner ? ( 
                <div className="flex justify-center items-center h-32">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            ) : (
                <section className="py-6 sm:py-1">
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((item) => (
                            <BookCard key={item.bookId} item={item}></BookCard>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default Books;