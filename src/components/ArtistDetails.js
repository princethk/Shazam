import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DisplaySong from './DisplaySong';
import './ArtistDetails.css';
import Fotter from './Fotter';
import Header from './Header';




 import { Link } from 'react-router-dom';
 import ArtishsName from './ArtishsName';

 const ArtistDetails = () => {
  const {resId} = useParams();
  const [detail , setDetails] = useState(null);


  console.log(resId)

  const fetchartist = async() =>{
          const data = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${resId}`, {
              headers: {
                  'projectId': 'd5qpkle1fta5'
              }
          })

          const json = await data.json();
          console.log(json.data);
          setDetails(json.data);
  }

  useEffect(()=>{
      fetchartist();
  },[]);
return (
  <>
  <Header/>
  <div  className='bg-gray-900 mt-0'>
       <div> <h1  className='text-orange-800  font-extrabold m-5 max-h-64 text-7xl'>{detail?.name}</h1></div>
         <div className='flex m-5'>
          <img className='m-10 rounded-full' src={detail?.image}/>
          <div>
          <p className='m-10 text-5xl text-white'>{detail?.description}</p>
              <p className='m-10 text-3xl text-white'>language :  
                {
                  detail?.languages
                  .map(language => language).join(', ')
                }
              </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {
              detail && detail.songs.map((song) => (
                  <DisplaySong key={song._id} song={song} />
              ))
          }
        </div>
  </div>
  <Fotter/>
  </>
)
}
export default ArtistDetails;
