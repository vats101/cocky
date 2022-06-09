import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
export default function Navbar({searchterm,setsearchterm,cocktails,setcocktails}) {
    const [loading, setLoading] = React.useState(false);
    //Search state
  //Using empty array[] as second array make to run useEffect ony ones when component mounts
  React.useEffect(() => {
    setLoading(true);
    async function getDrinks() {
        try {
            const response = await fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchterm}`
            );
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
              const newCocktails = drinks.map((item) => {
                const {
                  idDrink,
                  strDrink,
                  strDrinkThumb,
                  strAlcoholic,
                  strGlass,
                } = item;
                return {
                  id: idDrink,
                  name: strDrink,
                  image: strDrinkThumb,
                  info: strAlcoholic,
                  glass: strGlass,
                };
              });
              setcocktails(newCocktails);
            } else {
              setcocktails([]);
            }
          } catch (error) {
            console.log(error);
          }
      setLoading(false);
    }
    getDrinks();
  }, [searchterm]);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <SearchForm setsearchTerm={setsearchterm} />
      </div>
    </nav>
  );
}