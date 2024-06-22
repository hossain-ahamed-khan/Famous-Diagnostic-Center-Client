import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { ImCancelCircle } from "react-icons/im";
import { FaUpload } from "react-icons/fa";

const Reservation = () => {
    const axiosSecure = useAxiosSecure();

    const { data: reservations = [], refetch } = useQuery({
        queryKey: ['reservations'],
        queryFn: async () => {
            const res = await axiosSecure.get("/reservations");
            return res.data;
        }
    })

    const handleSubmitResult = async (test) => {

        const submit_test = {
            email: test.email,
            testName: test.testName,
            transactionId: test.transactionId,
            reportStatus: 'submitted'
        }

        const testRes = await axiosSecure.post(`/submit-result/${test._id}`, submit_test)
        if (testRes.data.insertedId) {
            const res = await axiosSecure.delete(`/bookedTests/${test._id}`)
            if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                    position: "center",
                    title: "Test Result submitted successfully",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    const handleDeleteReservation = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel reservation?",
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
                        title: "Reservation canceled successfully",
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
            <h1 className="text-4xl font-bold text-center">Reservations</h1>
            <div className="min-h-screen p-10">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Total Reservations: {reservations.length}</h2>
                </div>

                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#63b9db]">
                            <tr>
                                <th>#</th>
                                <th>TEST NAME</th>
                                <th>USER EMAIL</th>
                                <th>SUBMIT<br />RESULT</th>
                                <th>CANCEL<br />RESERVATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reservations.map((test, index) => <tr key={test._id}>
                                    <td>{index + 1}</td>
                                    <td>{test.testName}</td>
                                    <td>{test.email}</td>
                                    <td>
                                        {
                                            <button onClick={() => handleSubmitResult(test)}
                                                className="btn btn-md bg-[#ffa600b4] justify-end"><FaUpload className="text-white" />
                                            </button>
                                        }
                                    </td>
                                    <td>
                                        {
                                            <button
                                                onClick={() => handleDeleteReservation(test._id)} className="btn btn-md bg-red-500"
                                            ><ImCancelCircle className="text-white" />
                                            </button>
                                        }
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reservation;