import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import useBookData from "../Hook/useBookData";
import { saveToLocalStorage, saveToLocalStorageInfo } from "../Utilities/localStored";

const Book = () => {
    const [singleData, setSingleData] = useState({});
    const { bookId } = useParams();
    const { data } = useBookData();

    useEffect(() => {
        if (data) {
            const singleData = data.find(item => item.bookId == bookId);
            setSingleData(singleData);
        }
    }, [data, bookId]);

    const { image, bookName, author, category, rating, review, tags, totalPages, publisher, yearOfPublishing } = singleData || {};

    const [readClicked, setReadClicked] = useState(false);
    const [addedToWishlist, setAddedToWishlist] = useState(false); 

    const handleRead = () => {
        if (!readClicked) {
            saveToLocalStorage(singleData);
            setReadClicked(true);
        }
        else {
            
            toast.error('This book is already added Read Book Tab.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const handleWishlist = () => {
        if (!readClicked && !addedToWishlist) { 
            saveToLocalStorageInfo(singleData);
            setAddedToWishlist(true);
        } else {
            
            toast.error('This book is already added WishList Tab.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinner(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="mt-12 px-32">
            {spinner ? (
                <div className="flex justify-center items-center h-32">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            ) :
                <section className="dark:bg-gray-100 ">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl">{bookName}</h1>
                            <p className="text-xl py-3">By: {author}</p>
                            <hr className="border-dashed" />
                            <h3 className="text-xl py-3">{category}</h3>
                            <hr className="border-dashed" />
                            <p className="mt-6 mb-8 text-lg sm:mb-12">Review: <br /> <span className="text-sm">{review}</span></p>
                            <div className="flex gap-5 mb-5">
                                <h3 className="text-xl font-bold">Tags:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tags && tags.map((tag, index) => (
                                        <span key={index} className="px-3 py-1 bg-gray-200 rounded-lg text-green-500">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <hr className="border-dashed py-3" />
                            <div className="flex gap-10">
                                <div className="space-y-3">
                                    <h4 className="text-xl font-bold">Number of Pages:</h4>
                                    <h4 className="text-xl font-bold">Publisher:</h4>
                                    <h4 className="text-xl font-bold">Year Of Publishing:</h4>
                                    <h4 className="text-xl font-bold">Rating: <span className="ml-10"></span> </h4>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-bold">{totalPages}</h4>
                                    <h4 className="text-xl font-bold">{publisher}</h4>
                                    <h4 className="text-xl font-bold">{yearOfPublishing}</h4>
                                    <h4 className="text-xl font-bold">{rating} </h4>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-5">
                                <button onClick={handleRead} className="bg-green-500 p-3 rounded-lg text-white font-bold">Read</button>
                                <button onClick={handleWishlist} className={`bg-green-500 p-3 rounded-lg text-white font-bold ${readClicked && ''}`}>Wishlist</button>
                            </div>
                        </div>
                    </div>
                </section>
            }
            <ToastContainer position="top-right" />
        </div>
    );
};

export default Book;
