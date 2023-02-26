
export const getGifs = async(category) => {
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
    console.log(gif)
    return gif
    
}

