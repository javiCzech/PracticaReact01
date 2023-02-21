import { useState } from "react"
import { GifSearch } from "./GifSearch"

export const App = () => {

  const [categories, setcategories] = useState('');

   const addCategories = () => {
    setcategories('onepiece', ...categories)
  }

  return (
    <>
    <h1>Practica de ReactJS - 01 GifAPP</h1>
    <GifSearch setCategories={ setcategories }/>
    </>
  )
}
