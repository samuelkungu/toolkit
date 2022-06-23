import { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./styles.scss"

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };



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