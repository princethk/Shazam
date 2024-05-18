import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import "./AlbumPage.css";
import DisplaySong from './DisplaySong';
import Header from './Header';
import { useNavigate} from "react-router-dom";
const AlbumPage = () => {
  const navigate=useNavigate();
  const [musicData, setMusicData] = useState({});
  const { albumId } = useParams(); // Access the albumId parameter from the route
  const projectId = 'sfizfaun0yqo'; // Replace with your project ID

  useEffect(() => {
    fetch(`https://academics.newtonschool.co/api/v1/music/album/${albumId}`, {
      headers: {
        projectId: projectId,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch music data');
        }
      })
      .then((data) => {
        const musicInfo = data.data;
        setMusicData(musicInfo);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [projectId, albumId]);

  return (
    <>
    <Header/>
   
    <div className='main'>
      <h1>{musicData.title}</h1>
      <div>
      <img src={musicData.image} alt={musicData.name} />
      <p className='AboutAlbum'>Album: {musicData.description}</p>
      </div>
      <h2>Songs</h2>
      <div  className='api-card'  container spacing={2}>
        {musicData.songs &&
          musicData.songs.map((song) => (
            <Grid item key={song._id} xs={10} sm={6} md={1}>
             
             <DisplaySong  key={song._id} song={song} />
            </Grid>
          ))}
      </div>
      
      <h2>Artists</h2>
      <div  className='api-card'  container spacing={2}>
        {musicData.artists &&
          musicData.artists.map((artist) => (
            <Grid item key={artist._id} xs={10} sm={6} md={1}>
             
              <div  className="song-card"   onClick={()=>{navigate(`/artistdetails/${artist._id}`)}}>
              <img className="a-card-image" src={artist.image} alt={artist.name} />
                <CardContent>
                  <div className='title11' variant="h6">{artist.name}</div>
                </CardContent>
              </div>
            </Grid>
          ))}
      </div>
    </div>
  </>
  );
};

export default AlbumPage;



