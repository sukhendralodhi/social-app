import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import './sideBar.css';

const SideBar = () => {
  return (
    <div style={{ flex: 3 }} className="h-[calc(100vh-48px)] overflow-scroll">
      <div className="sidebarWrapper p-5">
        <ul className="sidebarList p-0 m-0 list-none">

          <li className="sidebarListItem flex items-center mb-6">
            <RssFeedIcon className="mr-4" />
            <span>Feed</span>
          </li>

          <li className="sidebarListItem flex items-center mb-6">
            <ChatIcon className="mr-4" />
            <span>Chat</span>
          </li>

          <li className="sidebarListItem flex items-center mb-6">
            <VideocamIcon className="mr-4" />
            <span>Video</span>
          </li>

          <li className="sidebarListItem flex items-center mb-6">
            <GroupsIcon className="mr-4" />
            <span>Groups</span>
          </li>

          <li className="sidebarListItem flex items-center mb-6">
            <BookmarkIcon className="mr-4" />
            <span>Bookmark</span>
          </li>

          <li className="sidebarListItem flex items-center mb-5">
            <HelpOutlineIcon className="mr-4" />
            <span>Help</span>
          </li>

          <li className="sidebarListItem flex items-center mb-6">
            <WorkIcon className="mr-4" />
            <span>Work</span>
          </li>

          <li className="sidebarListItem flex items-center mb-6">
            <EventIcon className="mr-4" />
            <span>Event</span>
          </li>

          <li className="sidebarListItem flex items-center mb-6">
            <MenuBookIcon className="mr-4" />
            <span>Courses</span>
          </li>
        </ul>

        <button className='w-32 text-white font-semibold p-1 bg-blue-500'>Show More</button>
        <hr className='my-5 mx-0' />
        <ul className='sidebarFriendList p-0 m-0 list-none space-y-5'>

          <li className='sidebarFriend flex items-center space-x-2'>
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" className='sidecarFriendImage w-8 object-cover rounded-full h-8' alt="" />
            <span className='sidebarFriendName'>Suryakumar Yadav</span>
          </li>

          <li className='sidebarFriend flex items-center space-x-2'>
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" className='sidecarFriendImage w-8 object-cover rounded-full h-8' alt="" />
            <span className='sidebarFriendName'>Rohit Sharma</span>
          </li>

          <li className='sidebarFriend flex items-center space-x-2'>
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" className='sidecarFriendImage w-8 object-cover rounded-full h-8' alt="" />
            <span className='sidebarFriendName'>Ishan Kishan</span>
          </li>

          <li className='sidebarFriend flex items-center space-x-2'>
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" className='sidecarFriendImage w-8 object-cover rounded-full h-8' alt="" />
            <span className='sidebarFriendName'>Tilak Verma</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar