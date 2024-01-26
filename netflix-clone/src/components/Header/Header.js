import React from 'react'
import './header.css'
import NetflixLogo from '../../assests/images/Netflix_Logo_CMYK.png'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = ()=> {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li className='logo'>
            <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className='header_right' >
            <ul>
                 <li> <SearchIcon/></li>
                 <li> <NotificationsNoneIcon/></li>
                 <li> <AccountBoxIcon/></li>
                 <li> <ArrowDropDownIcon/></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
//API Key from TMDB
// e5198148daff90039853f26933db3bfd;
//The movie database(TMDB) 


//This is to fetch all data for 20 movies
//https://api.themoviedb.org/3/discover/movie?api_key=e5198148daff90039853f26933db3bfd
