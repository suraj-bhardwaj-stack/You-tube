import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";


const Body =() =>{

    return(
        <div className="body-wrapper flex items-start">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default Body;