import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';

const PostList = () => {
    const posts = useSelector(state => state.posts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
        <article >
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    ));

    return (
        <section className='section'>
            <h2>posts</h2>
            {renderedPosts}
        </section>
    );
};

export default PostList;