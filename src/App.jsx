import { useState } from "react"
import { GifSearch } from "./GifSearch"
import {GifGrid} from "./GifGrid"

export const App = () => {

  const [categories, setcategories] = useState(['one Piece']);

   const onAddCategory = (newCategory) => {
    setcategories([...categories, newCategory])
    // console.log(categories)
  }

  return (
    <>
    <h1>Practica de ReactJS - 01 GifAPP</h1>

    <GifSearch onNewCategory={onAddCategory}/>
    <ol>{
        categories.map( category => {
          return <li key={category}>{category}</li>
        })
        }   
    </ol>
    </>)
  
}
