import React from "react";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function App() {
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [cocktails, setCocktails] = React.useState([]);
  return (
   <Router>
      
      <Navbar searchterm={searchTerm} setsearchterm={setSearchTerm} cocktails={cocktails} setcocktails={setCocktails} />
      {/* Switch is used to show first exact match path */}
      <Routes>
        <Route exact path="/" element={<Home cocktails={cocktails} setcocktails={setCocktails} searchterm={searchTerm} setsearchterm={setSearchTerm} />}>
          
        </Route>
        <Route exact path="/about"element={ <About />}>
         
        </Route>
        <Route exact path="/cocktail/:id"element={ <SingleCocktail />}>
         
        </Route>
        <Route path="*" element={ <Error />}>
         
        </Route>
       
      </Routes>
      <Footer/>
    </Router>
  );
}