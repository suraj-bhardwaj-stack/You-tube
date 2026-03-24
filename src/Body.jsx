import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body =() =>{
    return(
        <div className="body-wrapper flex items-start">
            <Sidebar/>
            <MainContainer/>
        </div>
    )
}

export default Body;