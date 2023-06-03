import Post from "../post/post"
import Share from "./share/Share"

const Feed = () => {
    return (
        <div style={{ flex: 5.5 }}>
            <div className="feedWrapper p-5">
                <Share />
                <Post />
            </div>
        </div>
    )
}

export default Feed