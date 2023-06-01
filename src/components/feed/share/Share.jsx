import PermMediaIcon from '@mui/icons-material/PermMedia';

const Share = () => {
    return (
        <div className="share w-full h-40 rounded-lg shadow-6xl">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="" className="shareProfileImg" alt="" />
                    <input placeholder="What's in your mind sanju?" className="shareInput border-2 outline-none" />
                </div>
                <hr />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon className="shareIcon" />
                            <span className="shareOptionText">Photo Or Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share