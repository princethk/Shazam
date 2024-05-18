import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import UserContext from './components/UserContext';
import Podcast from './components/Podcast';
import SongList from './components/SongList';
import AlbumPage from './components/AlbumPage';
import ArtistDetails from './components/ArtistDetails';
import Login from './UserLog/Login';
import ManageSubscription from './subcribe/ManageSubscription';
import SearchPage from './components/searchPage';
import AddFavourites from './components/AddFavourites';

function App() {
  const [searchItem , setSearchItem] = useState('');
  const [fav , setFav] = useState([]);
  const[authrise , setAuthrise] = useState(false);
  return (
    <>
    <UserContext.Provider  value={{ userSearchText : searchItem ,  
     setSearchItem ,favList:fav,setFav, isLogin: authrise,setAuthrise
    }}>
       {
        !authrise ? (
          <Login/>
        ) : (
      
               
              
             <Routes>
                     <Route  path="/"  element={<Home/> } />
                     <Route  path="/podcast"  element={<Podcast/> } />
                     <Route path="/songList/:id" element={<SongList/>}/>
                     <Route path="/albumpage/:albumId" element={<AlbumPage/>}/>
                     <Route path="/artistdetails/:resId" element={<ArtistDetails/>}/>
                     <Route path="/managesubscription" element={<ManageSubscription/>}/>
                    
                     <Route path="/search/song" element={<SearchPage/>}/>
                     <Route path="/favourite" element={<AddFavourites/>}/>
              </Routes>
 
        )}
        
        </UserContext.Provider>
    </>
  );
}


export default App;