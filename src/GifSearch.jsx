import { useState } from 'react'

export const GifSearch = ({setCategories}) => {

const [inputValue, setinputValue] = useState('')    

const handleSubmit = (e) => {
    e.preventDefault();
}

const onInputChange = ({target}) =>{
    setinputValue( target.value );
    console.log(inputValue)
    setCategories(categories => [inputValue, ...categories]);
}
  return (
    <form onClick={ handleSubmit }>
       <input 
       type="text"
       placeholder="One Pice"
       value={ inputValue }
       onChange={ onInputChange }>
       
       </input>
    
    </form>
  )
}