import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Body from './Body'
import Header from './Header'
import { RouterProvider } from 'react-router'
import WatchPage from './WatchPage'
import MainContainer from './MainContainer'
function App() {
  const appRouter = createBrowserRouter([{
    path : '/',
    element : <Body/>,
    children : [
      {path : '/' , element : <MainContainer/>},
      {path : '/watch' , element : <WatchPage/>},
    ]
  }])
  return (
    <div className="app-wrapper">
        <Header/>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default App
