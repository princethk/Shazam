import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { faPlay, faPause, faStar } from "@fortawesome/free-solid-svg-icons";
import UserContext from './UserContext';
import { red } from '@mui/material/colors';
import { useNavigate} from "react-router-dom";
// Import the CSS file in your component
import './Card.css';

// DisplaySong.css
const DisplaySong = ({ song }) => {
    const navigate=useNavigate();
    const { favList, setFav } = useContext(UserContext);
    const [star, setStar] = useState(true);
    const handelFavourite = () => {
        
        const songId = song._id;
        const temp = favList.filter((fav) => fav._id !== songId);
        if (temp.length === favList.length) {
            favList.push(song);
            setStar(false)
        }else{
        setFav(temp);
        setStar(true);
        }
            console.log(favList)
            console.log(temp);
    }
   
   
    
    return (
        <div className='api-card'>
        <div className="song-card" >
            <img className="s-card-image" src={song.thumbnail} alt={song.title}  onClick={()=>{navigate(`/songList/${song?._id}`)}} />
            <div>
                <h2 className="title10"  >{song.title}</h2>
               
            </div>

            <div className='fav'>
                    {
                        star ?
                        (<FavoriteIcon icon={faStar} onClick={handelFavourite} 
                        />) :( 
                        <FavoriteIcon icon={faStar} sx={{ color: red[500] }} onClick={handelFavourite}
                         />)
                    }
                    
                    

                </div>
           

        </div>
        </div>
    )
}
export default DisplaySong;