import homeIcon from './assets/home.png'
import shortsIocn from './assets/shorts.png'

const Sidebar = () =>{
    return(
        <div className="sidebar-wrapper w-52">
            <div className="top-head py-3 px-2 pb-4 border-b">
                <div className="box flex justify-content gap-2 items-center px-3 bg-gray-200 py-2 rounded mb-2">
                    <div className="icon">
                        <img className='w-5' src={homeIcon} alt="Home Icon" />
                        {/* <span>Home</span> */}
                    </div>
                    <div className="title">
                        <strong>Home</strong>
                    </div>
                </div>
                <div className="box flex justify-content gap-2 items-center px-2 hover:bg-gray-200 py-2 rounded">
                    <div className="icon">
                        <img className='w-5' src={shortsIocn} alt="Shorts Iocn" />
                        {/* <span>Shorts</span> */}
                    </div>
                    <div className="title">
                        <strong>Shorts</strong>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Sidebar;