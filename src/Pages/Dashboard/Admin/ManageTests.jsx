import { Link } from "react-router-dom";
import useTests from "../../../hooks/useTests";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoCalendarSharp } from "react-icons/io5";

const ManageTests = () => {
    const [tests, , refetch] = useTests();
    const axiosSecure = useAxiosSecure();

    const handleUpdate = (id) => {
        // update here 
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/tests/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        title: "test Deleted successfully",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-4xl font-bold text-center">Manage Tests</h1>
            <div className="min-h-screen p-10">
                <div className="flex justify-between">
                    <h2 className="text-4xl font-bold">Total tests: {tests.length}</h2>
                </div>

                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#63b9db]">
                            <tr>
                                <th>#</th>
                                <th>TEST IMAGE</th>
                                <th>TEST NAME</th>
                                <th>PRICE</th>
                                <th>RESERVATIONS</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tests.map((test, index) => <tr key={test._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="mask mask-squire w-20 h-20">
                                            <img src={test.image} />
                                        </div>
                                    </td>
                                    <td>
                                        {test.title}
                                    </td>
                                    <td>{test.price}</td>
                                    <td>
                                        <Link to={`/dashboard/reservation/${test._id}`}>
                                            <button
                                                className="btn bg-[#63b9db] btn-xl hover:bg-red-500">
                                                <IoCalendarSharp className="text-white"></IoCalendarSharp>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/update-test/${test._id}`}>
                                            <button
                                                className="btn bg-[#f9a73e] btn-xl ">
                                                <FaRegEdit className="text-white" />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(test._id)}
                                            className="btn bg-[#bf212f] btn-xl hover:bg-red-500">
                                            <FaTrashAlt className="text-white"></FaTrashAlt>
                                        </button>
                                    </td>

                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageTests;