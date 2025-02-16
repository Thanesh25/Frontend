import './App.css'
import AllRouters from './routers/AllRouters'
import { Header, Footer } from "./Components"

function App() 
{
 

  return (
    <>
      <div className='container text-primary'> 

      
      <Header/>
      <AllRouters/>
      <Footer/>
      
      </div>
    
    </>
  )
}

export default App
