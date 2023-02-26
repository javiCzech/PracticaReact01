import React from 'react'

export const GifItem = ({url,title}) => {
  return (
                <div className="card">
                <img className="card-img" src={url} alt={title}/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                </div>
              </div>
  )

}