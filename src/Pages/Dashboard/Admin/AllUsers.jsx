import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Make Admin",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Changed!",
                                text: "This user is now Admin.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-4xl font-bold text-center">All Users</h1>
            <div className="min-h-screen p-10">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Total Users: {users.length}</h2>
                </div>

                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#63b9db]">
                            <tr>
                                <th></th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>Status</th>
                                <th>Role</th>
                                <th>USER INFO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.status}</td>
                                    <td>
                                        {
                                            user.role === "admin" ? "Admin" :
                                                <button
                                                    onClick={() => handleMakeAdmin(user)} className="btn bg-[#8aeed5]"
                                                ><FaUsers className="text-white"></FaUsers>
                                                </button>
                                        }
                                    </td>
                                    <td>

                                        {/* Modal button start  */}
                                        <div>
                                            <button
                                                onClick={() => document.getElementById('my_modal_3').showModal()}
                                                className="btn btn-md bg-[#8aeed5] justify-end">See Info</button>

                                            <dialog id="my_modal_3" className="modal">
                                                <div className="modal-box">
                                                    <h2 className="font-bold text-2xl text-center mb-3">User Info</h2>

                                                    <button
                                                        onClick={() => document.getElementById('my_modal_3').close()}
                                                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                                                    <form>

                                                        <div className="grid grid-cols-1 gap-2">

                                                            <p><span className="font-bold">Price:</span> $240</p>

                                                            <label className="form-control">
                                                                <div className="label">
                                                                    <span className="label-text">Promocode</span>
                                                                </div>
                                                                <input type="text" name="pickupLocation" className="input input-bordered w-full " />
                                                            </label>

                                                            <button className="btn bg-[#8aeed5] font-bold">Apply Promocode</button>

                                                            <p><span className="font-bold">Payable Price:</span> $140</p>
                                                        </div>

                                                        <input
                                                            onClick={() => document.getElementById('my_modal_3').close()}
                                                            className="my-2 w-full py-2 bg-[#4479e1] rounded-lg cursor-pointer text-slate-200 text-xl font-bold" type="submit" value="Pay" />
                                                    </form>
                                                </div>
                                            </dialog>
                                        </div>
                                        {/* modal button end  */}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;