import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BookCard = ({ item }) => {
    const { bookId, image, bookName, author, category, rating, tags } = item;

    return (
        <div className="flex relative">
            <Link to={`/book/${bookId}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 ">
                <div className="card w-96 bg-base-100">
                    <figure><img className="" src={image} alt="Loading Book" /></figure>
                    <div className="card-body">
                        <div className="card-actions">
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <span key={index} className="text-sm bg-gray-200 px-3 py-1 rounded-lg text-green-500">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <h2 className="card-title">{bookName}</h2>
                        <p>By : {author}</p>
                        <hr className="border-dashed" />
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                            <p className="text-xl">{category}</p>
                            <div className="flex items-center gap-2">
                                <p className="text-xl">{rating}</p>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star" />
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
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
}

export default BookCard;