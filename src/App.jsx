import { useState } from "react"
import { GifGrid } from "./components/GifGrid";
import { GifSearch } from "./components/GifSearch"


export const App = () => {

  const [categories, setcategories] = useState(['One Piece']);

   const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([...categories, newCategory])
    console.log(newCategory.typeof)
  }

  return (
    <>
    <h1>Practica de ReactJS - 01 GifAPP</h1>

    <GifSearch onNewCategory={onAddCategory}/>
    {
        categories.map( category => (
          <GifGrid key={category} category={category}/>
        ))
        }   

    </>)
  
}
