import page from "../assets/Page-not-found-1.jpg"
import {Link} from "react-router-dom"
 export  const PageNotFound = () => {
   return <div className="container">
     <img src={page} className="img-fluid" />
     <p className="text-center">
       <Link to="/" className="btn btn-danger">
       Go to Home page
       </Link>
     </p>
   </div>;
 };


