import { useState } from "react";

export const useFetchGifs = () => {
    const [images, setimages] = useState([])
    const getImages = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=1koiN5iTnkSGwnbdWvK1Kl6nN17YieuA&q=${ inputValue }&limit=25`;

    }
}

