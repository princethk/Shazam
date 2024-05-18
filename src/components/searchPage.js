import React, { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';
import DisplaySong from './DisplaySong';
import Header from './Header';

const SearchPage = () => {
  const [song, setSong] = useState(null);
  const [flag , setFlag ] = useState(false);

  const { userSearchText } = useContext(UserContext);
  const capitalizeFirstLetter = (input) => {
    const words = input.split(' ');
    
    const capitalizedWords = words.map(word => {
      if (word.length === 0) {
        return '';
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  
    // Join the words with a plus sign
    const result = capitalizedWords.join('+');
  
    return result;
   
  };

  const capitalizedSearchText = capitalizeFirstLetter(userSearchText);
  console.log(capitalizedSearchText);
  

  const fetchSearchSong = async () => {
    try {
      const data = await fetch(`https://academics.newtonschool.co/api/v1/music/song?filter={"title":"${capitalizedSearchText}"}`, {
        headers: {
          'projectId': 'd5qpkle1fta5'
        }
      });
      const json = await data.json();
      // console.log(json.status);

      if (json.status === "success" && json.data.length > 0) {
        // Data request was successful and data is received
        setFlag(false);
        setSong(json.data[0]);
      } else {
        // Data request failed or no data received
        setFlag(true);
      }
    } catch (error) {
      // Handle any network or other errors
      console.error(error);
      setFlag(true);
    }
  }

  useEffect(() => {
    fetchSearchSong();
    console.log("useeffect");
  }, [capitalizedSearchText])
  return (
    <div className='bg-gray-900 mt-0'>
      <Header/>
      {song ? (
        <>
          <div>
            <h1 className='text-yellow-200 font-extrabold m-5 max-h-64 text-7xl'>Song Name :{song?.title}</h1>
            <h1 className='text-orange-800 font-bold m-5 max-h-64 text-7xl'>Artist : {song.artist[0].name}</h1>
          </div>
          <div className='flex m-5'>
            <img className='m-10 rounded-full' src={song.artist[0].image} alt={song.artist[0].name} />
            <div>
              <p className='m-10 text-5xl text-white'>{song.artist[0].description}</p>
              <p className='m-10 text-3xl text-white'>
                Language:
                {song.artist[0].languages.map((language) => language).join(', ')}
              </p>
            </div>
          </div>
          <div className='flex justify-center'>
            <DisplaySong key={song._id} song={song} />
          </div>

        </>
      ) : (
        <p className='text-red-300'>Loading......?</p> 
      )}
      {
        flag && <p className='text-yellow-300 font-bold m-5 max-h-64 text-7xl'>SONG NOT FOUND OR ...CHECK UR SPELLING ...IT MUST CONTAIN SINGLE WORD NAME SINGS</p>
      }
    </div>
  )
}
export default SearchPage;
