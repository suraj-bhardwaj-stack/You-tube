import menuIcon from './assets/hamburger.png';
import youTubeLoog from './assets/you-tube-logo.png';
import searchIcon from './assets/search-icon.png'
import notificationIcon from './assets/notification-icon.png'
import userIcon from './assets/user.png'
import { useDispatch, useSelector } from 'react-redux';
import { appSidebarToggle } from './utils/appSlice';
import { useEffect, useState } from 'react';
import { cacheResult } from './utils/searchSlice';
function Header() {
    const showCache = useSelector(store => store.search.searchSuggestion)

    
    const [searchQuery , setSearchQuery] = useState("")
    const [Suggestion , setSuggestion] = useState([])
    const [ShowSuggestion , setShowSuggestion] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!searchQuery) return
        
        const timer = setTimeout(()=>{
            if(showCache[searchQuery]){
                setSuggestion(["", showCache[searchQuery]])
            }else{

                callSuggestionApi(searchQuery)
            }
            
        }, 200)

        return () =>{
            clearTimeout(timer)
        }
    },[searchQuery])
    const hendleSidebar = ()=>{
        dispatch(appSidebarToggle())
    }
    const hendleSearch = (e) =>{
        e.preventDefault()
        callSuggestionApi(searchQuery)
    }
    const hendleInputSearch = async (e) =>{
        setSearchQuery(e.target.value)
        
    }

    const callSuggestionApi = async(searchQuery)=>{
          const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchQuery);
        const json = await data.json();
        setSuggestion(json)
        dispatch(cacheResult({[searchQuery]: json[1]}))
    }

   

   
    

    
  return (
    <div className="header-wrapper flex items-center justify-between py-2 px-5 ">
        <div className="header-menu w-44 flex items-center gap-4">
            <img src={menuIcon} alt="menuIcon" className='cursor-pointer' onClick={hendleSidebar} />

        <div className="app-log cursor-pointer">
            <img className='object-contain w-24' src={youTubeLoog} alt="You Tube Logo" />
        </div>
        </div>
        
        <div className="search-box w-1/3 relative">
            <form className='flex items-center' onSubmit={hendleSearch}>
                <input className='border w-full py-1 px-4 rounded-l-full' type="text"  placeholder='Search' onChange={hendleInputSearch}
                    onBlur={()=>setShowSuggestion(false)}
                    onFocus={()=>setShowSuggestion(true)}
                />
                <button className='py-1 px-4 bg-slate-100 border-[3px] border-slate-100 rounded-r-full'><img src={searchIcon} alt="Search Iocn" /></button>
            </form>
           {ShowSuggestion  && Suggestion[1]?.length >0 &&  <div className='search-suggestion absolute w-[90%] bg-white top-[2.4rem] border-gray-400 border rounded-md'>
                <ul className='m-2'>
                    {
                      Suggestion &&  Suggestion[1].map((result) => <li className='py-1 px-3 rounded-md font-medium text-[14px] pl-2 flex items-center gap-[10px]  hover:bg-gray-200'><img className='w-4 object-contain' src={searchIcon} alt="searchIcon" />{result}</li>)
                    }
                </ul>
            </div>
            }
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