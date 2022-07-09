import { useDispatch } from "react-redux"
import { deletePost } from "../../features/posts/postSlice";

function PostItem({ post }) {
    const dispatch = useDispatch();
    return (
        <div className="post">
            <div className="postDate">{new Date(post.createdAt).toLocaleString('en-US')}</div>
            <div className="postItem">
                <div><h2>{post.text}</h2></div>

                <button
                    onClick={() => dispatch(deletePost(post._id))}
                    className="close">X</button>
            </div>
        </div >
    )
}

export default PostItem
