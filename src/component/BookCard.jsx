import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const BookCard = ({ item }) => {
    const { bookId, image,  bookName, author, category, rating } = item;
    return (
        <div>
            <Link to={`/book/${bookId}`}className="block max-w-sm gap-3 mx-auto sm:max-w-full group transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-green-500 hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
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

BookCard.propTypes = {
    item: PropTypes.shape({
        bookId: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired
}
export default BookCard;