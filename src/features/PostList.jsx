import { useSelector } from 'react-redux'

const PostList = () => {
    const posts = useSelector(state => state.posts);

    const renderedPosts = posts.map(post => (
        <article >
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
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