import { NavLink } from "react-router-dom";
import hero from '../assets/banner.png';

const Hero = () => {
    return (
        <div className="hero lg:min-h-screen lg:bg-base-200 lg:rounded-[24px] lg:gap-9">
            <div className="hero-content flex flex-col lg:flex-row items-center justify-center">
                <img src={hero} className="w-full max-w-md lg:max-w-lg lg:w-auto mb-8 lg:mb-0 lg:mr-8" alt="Banner" />
                <div className="text-center lg:text-left">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4 lg:mb-6  whitespace-nowrap">Books to freshen <br />up your bookshelf</h1>
                    <NavLink to='/listedBooks'><button className="btn btn-primary">View The List</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Hero;
