<<<<<<< HEAD
=======
import "./styles.scss"
>>>>>>> d416079d90500b6ff2fb6475b82e1649465b8fc3
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset, selectAllAuth } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../components/spinner/Spinner";

<<<<<<< HEAD
=======

>>>>>>> d416079d90500b6ff2fb6475b82e1649465b8fc3
function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

<<<<<<< HEAD
    const dispatch = useDispatch()
    const navigate = useNavigate()
=======
    const navigate = useNavigate();
    const dispatch = useDispatch();
>>>>>>> d416079d90500b6ff2fb6475b82e1649465b8fc3

    const { user, isLoading, isError, isSuccess, message } = useSelector(selectAllAuth);

    useEffect(() => {
<<<<<<< HEAD
        if (isError) {
            toast.error(message)
        }
=======
        if (isError) { toast.error(message) }
>>>>>>> d416079d90500b6ff2fb6475b82e1649465b8fc3
        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, message, isError, isSuccess, navigate, dispatch])


    const onChange = (e) => {
<<<<<<< HEAD
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value,
=======
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
>>>>>>> d416079d90500b6ff2fb6475b82e1649465b8fc3
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = { name, email, password, }
            dispatch(register(userData))
        }
        console.log(formData);
    };

<<<<<<< HEAD
    if (isLoading) { return <Spinner /> }

    return (
        <>
            <section className="heading">
                <h1> <span><FaUser /></span> <span>Register</span> </h1>
                <p>Create an account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Enter your username"
                            className="form-control"
                            value={name} onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" name="email" id="email" placeholder="Enter your email"
                            className="form-control" value={email} onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="Enter your password"
                            className="form-control" value={password} onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password2" id="password2" placeholder="Confirm your password"
                            className="form-control" value={password2} onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block" type="submit"> Submit </button>
                    </div>
                </form>
            </section>
        </>
=======

    if (isLoading) { return <Spinner /> }

    return (
        <div className="auth">
            <div className="container">
                <form className="form" onSubmit={onSubmit}>
                    <div className="heading">
                        <h1> <span><FaUser /></span> <span>Register</span> </h1>
                        <p>Create an account</p>
                    </div>
                    <div className="form-group">
                        <label className="label">Username</label>
                        <input type="text" className="form-control" id="name" name="name"
                            value={name} placeholder='Enter your name' onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label className="label">Email address</label>
                        <input type="text" className="form-control" id="email" name="email"
                            value={email} placeholder='Enter your email' onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label className="label">Password</label>
                        <input type="text" className="form-control" id="password" name="password"
                            value={password} placeholder='Enter your password' onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label className="label">Confirm Password</label>
                        <input type="text" className="form-control" id="password2" name="password2"
                            value={password2} placeholder='Confirm password' onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn" type="submit"> Submit </button>
                    </div>
                </form>
            </div>
        </div>
>>>>>>> d416079d90500b6ff2fb6475b82e1649465b8fc3
    )
}

export default Register