
import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-center text-5xl font-bold">Welcome {user.displayName}</h1>
        </div>
    );
};

export default AdminHome;