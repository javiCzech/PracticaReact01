import { useState } from 'react'


export const GifSearch = ({onNewCategory}) => {

const [inputValue, setinputValue] = useState('')    

const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim())
    setinputValue('')
    // console.log(inputValue)
}

const onInputChange = ({target}) =>{
    setinputValue( target.value );
    
}
  return (<>
    <form onSubmit={ handleSubmit }>
       <input 
       type="text"
       placeholder="Buscar Gifs"
       value={ inputValue }
       onChange={ onInputChange }>
       
       </input>

    </form>
    </>
  )
}