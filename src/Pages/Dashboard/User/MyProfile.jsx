import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: loggedUser = {} } = useQuery({
        queryKey: [user?.email, "loggedUser"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loggedUser/${user.email}`)
            return res.data;
        }
    })

    return (
        <div className="w-4/5 mx-auto">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Welcome, {loggedUser.name}</h1>
                <button><FaEdit size={25} /></button>
            </div>
            <img className="w-20 h-20 my-4" src={loggedUser.image} alt="profile image" />
            <div className="grid grid-cols-2 gap-10 bg-[#8aeed5] p-10 rounded-2xl">
                <div>
                    <h3 className="text-2xl font-bold">Name</h3>
                    <p>{loggedUser.name}</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Email</h3>
                    <p>{loggedUser.email}</p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold">Blood Group</h3>
                    <p>{loggedUser.blood_group}</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Status</h3>
                    <p>{loggedUser.status}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;