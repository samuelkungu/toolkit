import "./styles.scss"
import AddPostForm from "../features/posts/AddPostForm"
import PostList from "../features/posts/PostList"

function Posts() {
    return (
        <div className="posts">
            <div className="form">
                <AddPostForm />
            </div>
            <div className="line"></div>
            <div className="list">
                <PostList />
            </div>
        </div>
    )
}

export default Posts
