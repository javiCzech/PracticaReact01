import { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
    const [images, setimages] = useState([])
    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=1koiN5iTnkSGwnbdWvK1Kl6nN17YieuA&q=${ category }&limit=25`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gif = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url

            }
            
        })
        setimages(gif)
        console.log(gif)
        
    }
    useEffect(() => {
        getGifs()
    }, []);
    
  return (
    <>
        <h3>{ category }</h3>
        {
            images.map(gif => {
                return (
                <div className="card-grid " key={gif.id}>
                <div className="card">
                <img className="card-img" src={gif.url} alt={gif.title}/>
                <div className="card-body">
                  <h5 className="card-title">{gif.title}</h5>
                </div>
              </div>
              </div>
              )
            })
        }
    </>
  )
}
