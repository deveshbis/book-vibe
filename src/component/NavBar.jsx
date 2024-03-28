import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 px-4 lg:px-32">
            <div className="navbar-start flex justify-between items-center">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/listedBooks">Listed Books</Link></li>
                        <li><Link to="/pagesToRead">Pages to Read</Link></li>
                        <li><Link to="/ebook">E-Book</Link></li>
                        <li><Link to="/kids">Kids Books</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost lg:text-3xl text-2xl font-bold">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex flex-grow justify-center">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <NavLink to="/" className="font-bold text-2xl" activeClassName="font-bold text-green-500 text-2xl border-2 border-green-500 border-solid">Home</NavLink>
                    <NavLink to="/listedBooks" className="font-bold text-2xl" activeClassName="font-bold text-green-500 text-2xl border-2 border-green-500 border-solid">Listed Books</NavLink>
                    <NavLink to="/pagesToRead" className="font-bold text-2xl" activeClassName="font-bold text-green-500 text-2xl border-2 border-green-500 border-solid">Pages to Read</NavLink>
                    <NavLink to="/ebook" className="font-bold text-2xl" activeClassName="font-bold text-green-500 text-2xl border-2 border-green-500 border-solid">E-Book</NavLink>
                    <NavLink to="/kids" className="font-bold text-2xl" activeClassName="font-bold text-green-500 text-2xl border-2 border-green-500 border-solid">Kids Books</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-3">
                <Link  className="btn bg-[#23BE0A] text-white">Sign In</Link>
                <Link className="btn bg-[#59C6D2] text-white">Sign Up</Link>
            </div>
        </div>
    );
};

export default NavBar;
