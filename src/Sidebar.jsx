import { useSelector } from 'react-redux'
import homeIcon from './assets/home.png'
import shortsIocn from './assets/shorts.png'
import { Link } from 'react-router-dom'

const Sidebar = () =>{
    const useSideBar = useSelector(store => store.app.isSideBar)
    console.log(useSideBar);
    
    return(

        <div className={`sidebar-wrapper ${useSideBar ? "w-52" : "w-20" }`}>
            <div className="top-head py-3 px-2 pb-4 border-b">
                <Link to="/"><div className={`box flex justify-content gap-2 items-center px-3 ${useSideBar ? "bg-gray-200" : "" } py-2 rounded mb-2`}>
                    <div className="icon flex flex-col items-center gap-1">
                        <img className='w-5' src={homeIcon} alt="Home Icon" />
                        {!useSideBar &&  <span className='font-normal text-[9px]'>Home</span> }
                    </div>
                    {useSideBar && <div className="title">
                        <strong className='text-sm font-normal'>Home</strong>
                    </div>
                    }
                    
                </div>
                </Link>
                <div className="box flex justify-content gap-2 items-center px-2 hover:bg-gray-200 py-2 rounded">
                    <div className="icon icon flex flex-col items-center gap-1">
                        <img className='w-5' src={shortsIocn} alt="Shorts Iocn" />
                      {!useSideBar && <span className='font-normal text-[9px]'>Shorts</span> }
                    </div>
                    {useSideBar && <div className="title">
                        <strong className='text-sm font-normal'>Shorts</strong>
                    </div>
                    }
                </div>
            </div>


        </div>
    )
}

export default Sidebar;