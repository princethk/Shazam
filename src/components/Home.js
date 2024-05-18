
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./Home.css";
import "./Card.css";
import Fotter from './Fotter';
import { useNavigate} from "react-router-dom";
import Header from './Header';
import DisplaySong from './DisplaySong';

const Home = () => {
  const navigate=useNavigate();
  const [ListOfMusic, setListOfMusic] = useState([]);
  const [ListOfAlbums, setListOfAlbums] = useState([]);
  const [ListOfArtists, setListOfArtists] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 12; // Number of items to display per page

  const fetchData = async (endpoint, setStateFunction) => {
    try {
      const data = await fetch(endpoint, {
        headers: {
          'projectId': 'sfizfaun0yqo'
        }
      });
      const json = await data.json();
      setStateFunction(json.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchTotalCount = async (endpoint) => {
    try {
      const data = await fetch(endpoint, {
        headers: {
          'projectId': 'sfizfaun0yqo'
        }
      });
      const json = await data.json();
      return json.meta.total;
    } catch (error) {
      console.error('Error fetching total count:', error);
    }
  };

  useEffect(() => {
    // Fetch total counts for each section
    const fetchCounts = async () => {
      const musicCount = await fetchTotalCount('https://academics.newtonschool.co/api/v1/music/song/count');
      const albumCount = await fetchTotalCount('https://academics.newtonschool.co/api/v1/music/album/count');
      const artistCount = await fetchTotalCount('https://academics.newtonschool.co/api/v1/music/artist/count');

      // Set total counts for pagination
      setTotalMusicCount(musicCount);
      setTotalAlbumCount(albumCount);
      setTotalArtistCount(artistCount);

      // Calculate the maximum number of pages based on the longest list
      const maxPages = Math.max(
        Math.ceil(musicCount / itemsPerPage),
        Math.ceil(albumCount / itemsPerPage),
        Math.ceil(artistCount / itemsPerPage)
      );

      setMaxPages(maxPages);
    };

    // Fetch data for the current page
    fetchData(`https://academics.newtonschool.co/api/v1/music/song?page=${currPage}&limit=${itemsPerPage}`, setListOfMusic);
    fetchData(`https://academics.newtonschool.co/api/v1/music/album?page=${currPage}&limit=${itemsPerPage}`, setListOfAlbums);
    fetchData(`https://academics.newtonschool.co/api/v1/music/artist?page=${currPage}&limit=${itemsPerPage}`, setListOfArtists);

    // Fetch total counts
    fetchCounts();
  }, [currPage]);

  const handlePageChange = (event, newPage) => {
    setCurrPage(newPage);
  };

  const [totalMusicCount, setTotalMusicCount] = useState(0);
  const [totalAlbumCount, setTotalAlbumCount] = useState(0);
  const [totalArtistCount, setTotalArtistCount] = useState(0);
  const [maxPages, setMaxPages] = useState(1);

  return (
    <>
    <Header/>
    <div className='main'>
      
      {/* Featured songs section */}
      <Typography  className="Heading"  variant="h4" gutterBottom>
        Featured Songs
      </Typography>
      <div className='api-card' container spacing={1}>
        {ListOfMusic.map((music) => (
          <Grid item key={music.id} xs={8} sm={2} md={1}>
            <DisplaySong  key={music._id} song={music} />
          </Grid>
        ))}
      </div>

      {/* Featured albums section */}
      <Typography  className="Heading" variant="h4" gutterBottom>
        Featured Albums
      </Typography>
      <div className='api-card' container spacing={2}>
        {ListOfAlbums.map((album) => (
          <Grid item key={album.id} xs={10} sm={6} md={1}>
            <div className="song-card" onClick={()=>{navigate(`/albumpage/${album._id}`)}}>
              <img className="s-card-image"
                component="img"
                alt={album.title}
                height="200"
                src={album.image} // Replace with the actual image URL field from your API
              />
          
                <div className='title10'>{album.title}</div>
                {/* Add more details like artist, genre, etc. */}
       
            </div>
          </Grid>
        ))}
      </div>

      {/* Featured artists section */}
      <Typography  className="Heading"  variant="h4" gutterBottom>
        Featured Artists
      </Typography>
      <div className='api-card' container spacing={2}>
        {ListOfArtists.map((artist) => (
          <Grid item key={artist.id} xs={10} sm={6} md={1}>
            <div className="song-card"  onClick={()=>{navigate(`/artistdetails/${artist._id}`)}}>
              <img className="a-card-image"
                component="img"
                alt={artist.name}
                height="200"
                src={artist.image} // Replace with the actual image URL field from your API
              />
              
                <div className='title10'>{artist.name}</div>
                {/* Add more details like genre, top songs, etc. */}
              
            </div>
          </Grid>
        ))}
      </div>

      {/* Single Pagination for all sections */}
      <Stack  className='pagination' >
        {/* <Pagination
          count={maxPages}
          page={currPage}
          onChange={handlePageChange}
          color="primary"
        /> */}
         
      <Pagination  className='paginationitem' count={10} variant="outlined" color="primary" page={currPage}  onChange={handlePageChange} />
     
      </Stack>
      <Fotter/>
    </div>
    </>
  );
};

export default Home;
