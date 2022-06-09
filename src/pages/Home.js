import React from "react";

import CocktailsList from "../components/CocktailList";


export default function Home({searchterm,setsearchterm,cocktails,setcocktails}) {
  //Setting states in functional components

  //Loading state
  const [loading, setLoading] = React.useState(false);

  //Filtering cocktails
  var [filter,setFilter]=React.useState("none");

  
  //Cocktails state
  

  //filtering function:
  const handleChange=(e)=>{
      setLoading(true);
      setFilter(e.target.value);
      filter=e.target.value;
      async function filterer(){
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${filter}`
        );
        const data = await response.json();
        console.log(data);
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
        console.log("done")
      }catch (error) {
        console.log(error)
      }
      
      setLoading(false);
    }
    filterer();
  };

  
  return (
    <main>
     
      <select className="select" onChange={(e)=>handleChange(e)}>
          <option value="a=Alcoholic">Alcoholic</option>
          <option value="a=Non_Alcoholic">Non-Alcoholic</option>
          <option value="c=Ordinary_Drink">Ordinary-Drink</option>
          <option value="c=Cocktail">Cocktail</option>
          <option value="g=Cocktail_glass">Cocktail-Glass</option>
          <option value="g=Champagne_flute">Champagne-Flute</option>
      </select>
      <CocktailsList loading={loading} cocktails={cocktails} />
    </main>
  );
}