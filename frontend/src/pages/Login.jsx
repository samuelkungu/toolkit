import { useState } from "react"
import { FaSignInAlt } from "react-icons/fa";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value,
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <>
            <section className="heading">
                <h1> <span><FaSignInAlt /></span> <span>Login</span> </h1>
                <p>Login and start setting tasks</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
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
                        <button className="btn btn-block" type="submit"> Sign In </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login