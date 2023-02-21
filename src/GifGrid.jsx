import { useState } from "react";


export const GifGrid = (category) => {

    const [images, setimages] = useState([])

    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=1koiN5iTnkSGwnbdWvK1Kl6nN17YieuA&q=${ category }&limit=25`;
        const resp = await fetch(url)
        const {data} = resp;
        setimages(...data,images)
        console.log(images)
    }

    
  return (
    <h3>{ category }</h3>
  )
}
