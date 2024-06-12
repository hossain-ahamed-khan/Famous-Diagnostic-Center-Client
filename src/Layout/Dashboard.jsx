import { NavLink, Outlet } from 'react-router-dom';
import { RiAdminFill } from "react-icons/ri";
import { FaUsers, FaFileMedical, FaCalendarCheck, FaRegImages, FaUserCircle, FaFileMedicalAlt } from "react-icons/fa";
import { FaBookMedical, FaImage, FaCalendarDays } from "react-icons/fa6";
import { TiHome } from 'react-icons/ti';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* side bar  */}
            <div className="w-72 min-h-screen bg-[#8aeed5] p-10">
                <ul className="menu space-y-3">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/admin-home">
                                    <RiAdminFill />
                                    ADMIN HOME
                                </NavLink></li>
                                <li><NavLink to="/dashboard/all-users">
                                    <FaUsers />
                                    ALL USERS
                                </NavLink></li>
                                <li><NavLink to="/dashboard/add-tests">
                                    <FaFileMedical />
                                    ADD TESTS
                                </NavLink></li>
                                <li><NavLink to="/dashboard/manage-tests">
                                    <FaBookMedical />
                                    MANAGE TESTS
                                </NavLink></li>
                                <li><NavLink to="/dashboard/reservation">
                                    <FaCalendarCheck />
                                    RESERVATION
                                </NavLink></li>
                                <li><NavLink to="/dashboard/add-banner">
                                    <FaImage />
                                    ADD BANNER
                                </NavLink></li>
                                <li><NavLink to="/dashboard/all-banners">
                                    <FaRegImages />
                                    ALL BANNERS
                                </NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashboard/my-profile">
                                    <FaUserCircle />
                                    MY PROFILE
                                </NavLink></li>
                                <li><NavLink to="/dashboard/appointments">
                                    <FaCalendarDays />
                                    APPOINTMENTS
                                </NavLink></li>
                                <li><NavLink to="/dashboard/test-results">
                                    <FaFileMedicalAlt />
                                    TEST RESULTS
                                </NavLink></li>
                            </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to="/">
                        <TiHome size={20} />
                        HOME
                    </NavLink></li>
                </ul>
            </div>

            {/* dashboard content  */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;