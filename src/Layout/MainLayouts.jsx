import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";



const MainLayouts = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;