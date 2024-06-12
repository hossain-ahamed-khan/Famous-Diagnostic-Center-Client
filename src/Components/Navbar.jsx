import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const navLinks = <>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/all-tests" >All Tests</NavLink></li>
        <li><NavLink to="/about-us" >About Us</NavLink></li>
        <li><NavLink to="/contact" >Contact</NavLink></li>
    </>


    return (
        <div>
            <div className="navbar shadow-md bg-[#f8f8f8]">
                <div className="w-full lg:w-4/5 mx-auto flex justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <a className="text-base lg:text-2xl font-bold">Nokkhotro <br />Diagnostic Center</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal uppercase space-x-6" >
                            {navLinks}
                        </ul>
                    </div>

                    <div className="navbar-end flex justify-end gap-2">
                        {
                            user ? isAdmin ? <>
                                <Link to="/dashboard/admin-home"><button className="btn bg-[#8aeed5]">Admin Dashboard</button></Link>
                                <button onClick={handleLogOut} className="btn bg-[#63b9db]">Log out</button>
                            </>
                                : <>
                                    <Link to="/dashboard/my-profile"><button className="btn bg-[#8aeed5]">Patient Portal</button></Link>
                                    <button onClick={handleLogOut} className="btn bg-[#63b9db]">Log out</button>
                                </> :
                                <Link to="/login" className="btn bg-[#8aeed5] hover:bg-[#63b9db]">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;