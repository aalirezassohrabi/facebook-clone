import './Sidebar.css'

import ChatIcon from '@material-ui/icons/Chat'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import { ExpandMoreOutlined } from '@material-ui/icons'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleIcon from '@material-ui/icons/People'
import React from 'react'
import SidebarRow from './SidebarRow'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow
        src='https://avatars.githubusercontent.com/u/78279671?v=4'
        title='Alireza Sohrabi'
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='COVID-19 Information Center'
      />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
      <SidebarRow Icon={PeopleIcon} title='Friends' />
      <SidebarRow Icon={ChatIcon} title='Messenger' />
      <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
      <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
      <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />
    </div>
  )
}

export default Sidebar
