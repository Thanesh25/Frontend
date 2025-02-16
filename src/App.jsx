import './App.css'
import AllRouters from './routers/AllRouters'
import { Header, Footer } from "./Components"
import axios from "axios";

axios.defaults.baseURL = "https://backend-0er4.onrender.com/";
axios.defaults.withCredentials = true;

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
