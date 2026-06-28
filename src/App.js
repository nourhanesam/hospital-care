import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Component/nav/Navbar";
import Home from "./pages/Home";
import Footer from "./Component/nav/footer/Footer";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Component/nav/layout/Layout";
import Contact from "./pages/contact";
import Blog from "./pages/blog/Blog";
import Blogdetails from "./pages/blogdetails/Blogdetails";
import Services from "./pages/services/Services";
import Servicesdetails from "./pages/services/servicesdetails/Servicesdetails";
import About from "./Component/pagesnav/About";
import LoginRe from "./Component/pagesnav/LoginRe";
import Faqs from "./Component/pagesnav/Faqs";
import Booking from "./Component/pagesnav/Booking";
import Ourteam from "./pages/Ourteam";
import Register from "./Component/pagesnav/Register";
import Forget from "./Component/pagesnav/Forget";


const routs = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
      <Route index  element={<Home />} />
         <Route  path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-details" element={<Blogdetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services details" element={<Servicesdetails />} />
      <Route path="/about us" element={<About />} />
      <Route path="team" element={<Ourteam />} />
      <Route path="faqs" element={< Faqs/>} />
      <Route path="booking" element={<Booking />} />
    </Route>
    
     <Route path="/login and register" element={<LoginRe />} />
       <Route path="/Register" element={<Register />} />
        <Route path="/forget password" element={ <Forget />} />
     
   </> 
  )
);


function App() {
  return (
    <>
      <RouterProvider router={routs} />
      
    </>
  );
}

export default App;
