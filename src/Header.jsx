import menuIcon from './assets/hamburger.png';
import youTubeLoog from './assets/you-tube-logo.png';
import searchIcon from './assets/search-icon.png'
import notificationIcon from './assets/notification-icon.png'
import userIcon from './assets/user.png'
import { useDispatch } from 'react-redux';
import { appSidebarToggle } from './utils/appSlice';
function Header() {
    const dispatch = useDispatch()
    const hendleSidebar = ()=>{
        dispatch(appSidebarToggle())
    }
  return (
    <div className="header-wrapper flex items-center justify-between py-3 px-4 shadow">
        <div className="header-menu w-44 flex items-center gap-4">
            <img src={menuIcon} alt="menuIcon" className='cursor-pointer' onClick={hendleSidebar} />

        <div className="app-log cursor-pointer">
            <img className='object-contain w-24' src={youTubeLoog} alt="You Tube Logo" />
        </div>
        </div>
        
        <div className="search-box w-1/3 ">
            <form className='flex items-center'>
                <input className='border w-full py-1 px-4 rounded-l-full' type="text"  placeholder='Search'/>
                <button className='py-1 px-4 bg-slate-100 border-[3px] border-slate-100 rounded-r-full'><img src={searchIcon} alt="Search Iocn" /></button>
            </form>
        </div>
        <div className="user-notify flex items-center w-30 gap-4">
            <div className="notification-tab">
                <img className='w-6' src={notificationIcon} alt="Notification Icon" />
            </div>

            <div className="user-profile w-10">
                <img src={userIcon} alt="User Icon" />
            </div>
        </div>
    </div>
  )
}

export default Header