import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { closeSideBar } from "./utils/appSlice"
import { YOU_TUBE_API_KEY } from "./utils/constent"
import channelIcon from './assets/channel-icon.png'

const SearchResults = () => {
    const dispatch = useDispatch()
    const [searchParam] = useSearchParams()
    const query = searchParam.get('search_query')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(closeSideBar())
    }, [dispatch])

    useEffect(() => {
        if (!query) return

        const fetchResults = async () => {
            try {
                setLoading(true)
                const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=${encodeURIComponent(query)}&key=${YOU_TUBE_API_KEY}`)
                const json = await data.json()
                setResults(json.items || [])
            } catch {
                setResults([])
            } finally {
                setLoading(false)
            }
        }

        fetchResults()
    }, [query])

    if (loading) return <h1 className="m-4">Loading...</h1>
    if (!results.length) return <h1 className="m-4">No results found for "{query}"</h1>

    return (
        <div className="search-results-wrapper mx-4 my-4 w-full">
            {
                results.map((video) => (
                    <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
                        <div className="result-item flex gap-4 mb-4 p-2 rounded-lg hover:bg-slate-100">
                            <img className="w-[360px] max-w-[40%] rounded-lg object-cover" src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
                            <div className="result-info">
                                <strong className="text-[16px]">{video.snippet.title}</strong>
                                <div className="flex items-center gap-2 mt-2">
                                    <img src={channelIcon} className="w-6 h-6 rounded-[50%]" alt="channelIcon" />
                                    <h2 className="text-[13px] text-gray-700 font-medium">{video.snippet.channelTitle}</h2>
                                </div>
                                <p className="text-[12px] text-gray-600 mt-2">{video.snippet.description}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default SearchResults
