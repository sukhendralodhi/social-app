import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

const TopBar = () => {
    return (
        <div className='topbarContainer h-12 w-full bg-blue-500 flex items-center sticky top-0'>
            <div className="topbarLeft">
                <span className="logo text-3xl ml-5 font-bold text-white cursor-pointer">Connect_App</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar w-full bg-white h-7 rounded-3xl flex items-center">
                    <SearchIcon className='ml-2.5' />
                    <input placeholder='Search for friends, post or videos' className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLink">
                    <span className="topbarLink">Home Page</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className='topBarIconBadge'>1</span>
                    </div>

                    <div className="topbarIconItem">
                        <ChatBubbleIcon />
                        <span className='topBarIconBadge'>1</span>
                    </div>

                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className='topBarIconBadge'>1</span>
                    </div>
                </div>
                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-256.png" alt="" className='topbarImg w-8' />
            </div>
        </div>
    );
}

export default TopBar