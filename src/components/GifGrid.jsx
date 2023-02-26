import { useEffect, useState } from "react";
import { getGifs } from "../helpers/useFetchGifs";

export const GifGrid = ({ category }) => {
    const [images, setimages] = useState([])
    
    const getImages = async() => {
      const newImages = await getGifs(category);
      setimages(newImages);
    }

    useEffect(() => {
      getImages()
    }, []);
    
  return (
    <>
        <h3>{ category }</h3>
        {
            images.map(gif => {
                return (
                <div className="card-grid" key={gif.id}>
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
