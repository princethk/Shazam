import React, { useState, useContext } from 'react';
import { AppBar, Button, InputBase, Toolbar, Typography } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import './Header.css';

const Header = () => {
  const { setSearchItem, setAuthrise } = useContext(UserContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [changeValue, setChangeValue] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const Logoutfun = () => {
    setAuthrise(false);
  };

  const handleChange = () => {
    setSearchItem(changeValue);
    setChangeValue('');
  };

  return (
    <AppBar>
      <div className='nav1'>
        <MusicNoteIcon to="/" />
        <Link to="/"><a className="nav-item">Shazam Webapp</a></Link>
        <div className="searchbox">
          <input
            type="text"
            placeholder="Search..."
            value={changeValue}
            onChange={(e) => setChangeValue(e.target.value)}
          />
          <Link to="/search/song">
            <button
              className='text-white mx-2 mt-2'
              onClick={handleChange}
            >
              Search
            </button>
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/favourite" className="navbar-link">Favourites</Link>
          <Link to="/managesubscription" className="navbar-link">Manage Subscription</Link>
          <a className="navbar-link" onClick={Logoutfun}>Logout</a>
        </div>
      </div>
      <nav className='nav'>
        <Link to="/"><a className="nav-item" href="#All">All</a></Link>
        <Link to="/podcast"><a className="nav-item" href="#TrendingNow">Trending Now</a></Link>
        <Link to="/podcast"><a className="nav-item" href="#OldSongs">Old Songs</a></Link>
        <Link to="/podcast"><a className="nav-item" href="#NewSongs">New Songs</a></Link>
        <div className="dropdown">
          <a className="nav-item" href="#Mood&Genre" onClick={toggleDropdown}>
            Moods & Genre <ArrowDropDownIcon />
          </a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a className="dropdown-item" href="#PartySongs">Party Songs</a>
              <a className="dropdown-item" href="#DanceSongs">Dance Songs</a>
              <a className="dropdown-item" href="#BollywoodSongs">Bollywood Songs</a>
              <a className="dropdown-item" href="#RomanticSongs">Romantic Songs</a>
              <a className="dropdown-item" href="#90'sHits">90's Hits</a>
              <a className="dropdown-item" href="#Ghazals">Ghazals</a>
              <a className="dropdown-item" href="#BhaktiSongs">Bhakti Songs</a>
              <a className="dropdown-item" href="#LoFISongs">LoFI Songs</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <a className="nav-item" href="#TopAlbums" onClick={toggleDropdown}>
            Top Albums <ArrowDropDownIcon sx={{ marginBottom: '0px' }} />
          </a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a className="dropdown-item" href="#TopHindiAlbums">Top Hindi Albums</a>
              <a className="dropdown-item" href="#TopEnglishAlbums">Top English Albums</a>
              <a className="dropdown-item" href="#TopTamilAlbums">Top Tamil Albums</a>
            </div>
          )}
        </div>
        <Link to="/podcast"><a className="nav-item" href="#TopArtist">Top Artists</a></Link>
        <div className="dropdown">
          <a className="nav-item" href="#TopPlaylists" onClick={toggleDropdown}>
            Top Playlists <ArrowDropDownIcon />
          </a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a className="dropdown-item" href="#ShazamTop100Songs">Shazam Top 100 Songs</a>
              <a className="dropdown-item" href="#TrendingHindiSongs">Trending Hindi Songs</a>
              <a className="dropdown-item" href="#TopEnglishSongs">Top English Songs</a>
              <a className="dropdown-item" href="#TrendingReelsSongs">Trending Reels Songs</a>
              <a className="dropdown-item" href="#TopRomanticHits">Top Romantic Hits</a>
            </div>
          )}
        </div>
        <Link to="/podcast"><a className="nav-item">Podcast</a></Link>
      </nav>
    </AppBar>
  );
};

export default Header;
