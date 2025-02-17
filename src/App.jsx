import './App.css'
import AllRouters from './routers/AllRouters'
import { Header, Footer } from "./Components"
import axios from "axios"


axios.defaults.baseURL = "https://backend-g1tu.onrender.com";
axios.defaults.withCredentials="true"

function App() 
{
   console.log(axios.defaults.baseURL);
   console.log(axios.defaults.withCredentials);
 

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
