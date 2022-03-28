import './Header.css'

import { Avatar, IconButton } from '@mui/material'

import AddIcon from '@mui/icons-material/Add'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FlagIcon from '@mui/icons-material/Flag'
import ForumIcon from '@mui/icons-material/Forum'
import HomeIcon from '@mui/icons-material/Home'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='http://logok.org/wp-content/uploads/2021/11/Facebook-Logo-2019-640x480.png'
          alt=''
        />
        <div className='header__input'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>

      <div className='header__center'>
        <div className='header__option'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <FlagIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SubscriptionsOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleIcon fontSize='large' />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar />
          <h4>aaaallliireza</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon/>
        </IconButton>
        <IconButton>
         <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
         <ExpandMoreIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default Header
