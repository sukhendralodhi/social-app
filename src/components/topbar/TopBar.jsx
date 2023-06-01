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
                    <input placeholder='Search for friends, post or videos' className='searchInput border-none outline-none w-9/12 px-4' />
                </div>
            </div>
            <div className="topbarRight flex items-center justify-around text-white">
                <div className="topbarLink space-x-2.5 text-sm cursor-pointer">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons flex space-x-3">
                    <div className="topbarIconItem cursor-pointer relative">
                        <PersonIcon />
                        <span className='topBarIconBadge w-4 h-4 text-xs bg-red-700 text-white rounded-2xl flex items-center justify-center absolute -top-1 -right-1'>1</span>
                    </div>

                    <div className="topbarIconItem cursor-pointer relative">
                        <ChatBubbleIcon />
                        <span className='topBarIconBadge w-4 h-4 text-xs bg-red-700 text-white rounded-2xl flex items-center justify-center absolute -top-1 -right-1'>1</span>
                    </div>

                    <div className="topbarIconItem cursor-pointer relative">
                        <NotificationsIcon />
                        <span className='topBarIconBadge w-4 h-4 text-xs bg-red-700 text-white rounded-2xl flex items-center justify-center absolute -top-1 -right-1'>1</span>
                    </div>
                </div>
                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-256.png" alt="" className='topbarImg w-8 rounded-full object-cover cursor-pointer' />
            </div>
        </div>
    );
}

export default TopBar