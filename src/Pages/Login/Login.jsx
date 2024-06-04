import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');

    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully logged in",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(from, { replace: true });

                // axios.post('http://localhost:5000/jwt', user)
                //     .then(res => {
                //         console.log(res.data)
                //         if (res.data.success) {
                //             navigate("/");
                //         }
                //     })
            })
            .catch(error => {
                console.error(error);
                setLoginError("Incorrect Email or Password");
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-center text-3xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="relative form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered" required />
                            <span className="absolute right-3 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </span>
                        </div>

                        {
                            loginError && <p className="text-red-700">{loginError}</p>
                        }

                        <div className="form-control mt-6">
                            <button className="btn bg-[#8aeed5] font-bold">Login</button>
                        </div>
                    </form>

                    <div className="text-center my-6">
                        I have no account. Want to <Link className="font-bold text-[#4479e1]" to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;