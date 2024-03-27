import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar bg-base-100 px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li>
                    </ul>
                </div>
                <Link to = '/' className="btn btn-ghost text-3xl font-bold">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <NavLink to = '/' className={({isActive}) => isActive ? 'font-bold text-primary text-2xl' : 'font-bold text-2xl'}>Home</NavLink>
                    <NavLink to = '/listedBooks' className={({isActive}) => isActive ? 'font-bold text-primary text-2xl' : 'font-bold text-2xl'}>Listed Books</NavLink>
                    <NavLink to = '/pagesToRead' className={({isActive}) => isActive ? 'font-bold text-primary text-2xl' : 'font-bold text-2xl'}>Pages to Read</NavLink>
                    <NavLink to = '/ebook' className={({isActive}) => isActive ? 'font-bold text-primary text-2xl' : 'font-bold text-2xl'}>E-Book</NavLink>
                    <NavLink to = '/kids' className={({isActive}) => isActive ? 'font-bold text-primary text-2xl' : 'font-bold text-2xl'}>KIds Books</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <a className="btn">Sign In</a>
                <a className="btn">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;