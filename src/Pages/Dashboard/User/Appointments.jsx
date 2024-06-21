import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { ImCancelCircle } from "react-icons/im";
import Swal from "sweetalert2";

const AppointMents = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: bookedTests = [], refetch } = useQuery({
        queryKey: ['bookedTests', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookedTests/${user.email}`);
            return res.data;
        }
    })

    const handleDeleteAppointment = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel appointment?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/bookedTests/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        title: "appointment canceled successfully",
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
            <h1 className="text-4xl font-bold text-center">Upcoming Appointments</h1>
            <div className="min-h-screen p-10">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Total Booked Tests: {bookedTests.length}</h2>
                </div>

                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#63b9db]">
                            <tr>
                                <th>#</th>
                                <th>TEST NAME</th>
                                <th>APPOINTMENT DATE</th>
                                <th>REPORT STATUS</th>
                                <th>CANCEL <br />APPOINTMENT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookedTests.map((test, index) => <tr key={test._id}>
                                    <td>{index + 1}</td>
                                    <td>{test.testName}</td>
                                    <td>{test.appointmentDate}</td>
                                    <td>{test.reportStatus}</td>
                                    <td>
                                        {
                                            <button
                                                onClick={() => handleDeleteAppointment(test._id)} className="btn bg-red-500"
                                            ><ImCancelCircle className="text-white" size={20} />
                                            </button>
                                        }
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

export default AppointMents;