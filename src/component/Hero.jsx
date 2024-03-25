import { NavLink } from "react-router-dom";


const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-[24px] gap-9">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/src/assets/banner.png" className="max-w-sm rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold py-6">Books to freshen <br /> up your bookshelf</h1>
                        <NavLink to='/listedBooks'><button className="btn btn-primary">View The List</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;