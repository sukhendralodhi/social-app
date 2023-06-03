import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
    return (
        <div className="share w-full h-40 rounded-lg shadow-6xl">
            <div className="shareWrapper p-2.5">
                <div className="shareTop flex items-center">
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" className="shareProfileImg w-12 mr-2.5 object-cover h-12 rounded-full" alt="" />
                    <input placeholder="What's in your mind sanju?" className="shareInput outline-none w-4/5" />
                </div>
                <hr  className='m-5' />
                <div className="shareBottom flex items-center justify-between">
                    <div className="shareOptions flex items-center ml-5">
                        <div className="shareOption flex items-center mr-3 cursor-pointer">
                            <PermMediaIcon className="shareIcon text-lg mr-1 text-red-400" />
                            <span className="shareOptionText text-sm font-medium">Photo Or Video</span>
                        </div>

                        <div className="shareOption flex items-center mr-3 cursor-pointer">
                            <LabelIcon className="shareIcon text-lg mr-1 text-blue-600" />
                            <span className="shareOptionText text-sm font-medium">Tag</span>
                        </div>

                        <div className="shareOption flex items-center mr-3 cursor-pointer">
                            <LocationOnIcon className="shareIcon text-lg mr-1 text-green-600" />
                            <span className="shareOptionText text-sm font-medium">Location</span>
                        </div>

                        <div className="shareOption flex items-center mr-3 cursor-pointer">
                            <EmojiEmotionsIcon className="shareIcon text-lg mr-1 text-yellow-700" />
                            <span className="shareOptionText text-sm font-medium">Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton bg-green-500 py-1 px-1.5 font-medium rounded-sm mr-5 text-white'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share