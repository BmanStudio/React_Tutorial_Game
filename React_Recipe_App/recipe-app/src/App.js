import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {

    const APP_ID = '1f1d9f38';
    const APP_KEY = '442ea7ddbf219f65548344c5856a0ee0';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('');

    useEffect(() =>{
        getRecipes();
        console.log("UseEffect has run")
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        console.log(search);
        e.preventDefault();
        setQuery(search);
    }

    return (
        <div className={"App"}>
           <form className={"search-form"} onSubmit={getSearch}>
               <input
                   className={"search-bar"}
                   type={"text"}
                   onChange={updateSearch}
                   value={search}
               />
               <button className={"search-button"} type={"submit"}>
                   Search
               </button>
           </form>
            {recipes.map(myRecipe => (
                <Recipe
                    key={myRecipe.recipe.label}
                    title={myRecipe.recipe.label}
                    calories={myRecipe.recipe.calories}
                    image={myRecipe.recipe.image}
                />
            ))}
        </div>
    );
}

export default App;
