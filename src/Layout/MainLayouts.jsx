import NavBar from "../component/NavBar";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";


const MainLayouts = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <Home></Home>
            <ListedBooks></ListedBooks>
            <PagesToRead></PagesToRead>
        </div>
    );
};

export default MainLayouts;