import React,{useContext } from 'react'
import UserContext from './UserContext';
// import FavCard from './favCard';
import DisplaySong from './DisplaySong';
import Home from './Home';
import Header from './Header';
import "./Favourite.css";
import Fotter from './Fotter';
const AddFavourites = () => {

    const { favList } = useContext(UserContext);
    console.log(favList);

  return favList.length === 0?(
    <>
    <Header/>
  <div className='favouritNot'>

                <h1 className='text-yellow-300  font-bold m-5 max-h-64 text-5xl'>No Card Added to the Favourites yet....!!</h1>
  
  </div>
  </>):(
    <>
    <Header/>
    <div className="flex flex-wrap justify-evenly">
        {
            favList.map((song)=>(
                <DisplaySong key={song._id} song={song} />

            ))
        }
    </div>
    <Fotter/>

    </>
  )
}

export default AddFavourites