<<<<<<< HEAD
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PostForm from '../components/postForm/PostForm'
import PostItem from '../components/postItem/PostItem'
import Spinner from '../components/spinner/Spinner'
import { getPosts, selectAllPosts } from '../features/posts/postSlice'
import { selectAllAuth } from '../features/auth/authSlice'
=======
<<<<<<< HEAD
=======
import "./styles.scss"
>>>>>>> d416079d90500b6ff2fb6475b82e1649465b8fc3
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector(selectAllAuth)
    const { posts, isLoading, isError, message } = useSelector(selectAllPosts)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/login')
        }

        dispatch(getPosts())
    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='heading'>
                <h1>Welcome {user && user.name}</h1>
                <p>Posts Dashboard</p>
            </section>

            <PostForm />


            <section className='content'>
                {posts.length > 0 ? (
                    <div className='posts'>
                        {posts.map((post) => (
                            <PostItem key={post._id} post={post} />
                        ))}
                    </div>
                ) : (
                    <h3>You have not set any posts</h3>
                )}
            </section>
        </>
    )
}

export default Dashboard