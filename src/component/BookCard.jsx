import { Link } from "react-router-dom";


const BookCard = ({ book }) => {
    const { id, image, tags, bookName, author, category, rating } = book;
    return (
        <div>
            <Link to={`/book/${id}`}className="block max-w-sm gap-3 mx-auto sm:max-w-full group transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-green-500 hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                <div className="card w-96 bg-base-100">
                    <figure><img src={image} alt="Loading Book" /></figure>
                    <div className="card-body">
                        <div className="card-actions">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                        <h2 className="card-title">
                            {bookName}

                        </h2>
                        <p>By : {author}</p>
                        <hr className="border-dashed" />
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                            <p className="text-xl">{category}</p>
                            <div className="flex items-center gap-2">
                                <p className="text-xl">{rating}</p>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star " />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;