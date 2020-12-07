import React,{useEffect, useState} from "react";
import './App.css';

const App = () => {

    const APP_ID = '1f1d9f38';
    const APP_KEY = '442ea7ddbf219f65548344c5856a0ee0';

    useEffect(() =>{

    }, []);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        console.log(data);
    };

    return (
        <div className={"App"}>
           <form className={"search-form"}>
               <input className={"search-bar"} type={"text"}/>
               <button className={"search-button"} type={"submit"}>
                   Search
               </button>
           </form>
        </div>
    );
}

export default App;
