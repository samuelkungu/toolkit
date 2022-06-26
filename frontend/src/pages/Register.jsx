import { useState } from 'react';
import { FaUser } from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

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
    )
}

export default Register