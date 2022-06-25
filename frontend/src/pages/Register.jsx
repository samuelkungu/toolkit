import "./styles.scss"
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset, selectAllAuth } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../components/spinner/Spinner";


function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(selectAllAuth);

    useEffect(() => {
        if (isError) { toast.error(message) }
        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, message, isError, isSuccess, navigate, dispatch])


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
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
    )
}

export default Register