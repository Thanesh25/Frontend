import './App.css'
import AllRouters from './routers/AllRouters'
import { Header, Footer } from "./Components"
import axios from "axios"


axios.defaults.baseURL = "https://backend-0er4.onrender.com/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
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
