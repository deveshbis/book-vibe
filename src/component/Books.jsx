
import BookCard from "./BookCard";
import useBookData from "../Hook/useBookData";


const Books = () => {

    // const books = useLoaderData();

    const {data, loading} = useBookData();
    console.log(data);
    
    return (
        <div className="mt-12">
            <h2 className="text-5xl font-bold text-center mb-10">Books</h2>
            <section className="py-6 sm:py-1">

                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        // books.map(card => (<BookCard card={card} key={card.bookId}></BookCard>))
                        data.map((item)=> (<BookCard key={item.bookId} item={item}></BookCard>))
                    }
                    

                </div>

            </section>
        </div>
    );
};

export default Books;