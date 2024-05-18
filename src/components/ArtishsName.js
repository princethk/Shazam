import React from 'react'

 const ArtishsName = ({artish}) => {
  return (
    <div className="flex items-center justify-center">
    <div className="m-4 p-4 w-[300px]  drop-shadow-lg flex flex-col items-center text-center">
      <img className="m-2 rounded-full" src={artish.image} alt='image'/>  
      <h1 className="mt-2">{artish.name}</h1>  
    </div>
  </div>
  )
}

export default ArtishsName;
