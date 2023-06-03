
const Post = () => {
  return (
    <div className="post p-5">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg w-8" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" alt="" />
                    <div>
                    <span className="postUserName">Surya Kumar Yadav</span>
                    <span className="postTime">5 min ago</span>
                    </div>
                </div>
                <div className="postTopRight"></div>
            </div>
            <div className="postCenter"></div>
            <div className="postBottom"></div>
        </div>
    </div>
  )
}

export default Post;