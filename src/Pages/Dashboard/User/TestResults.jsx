import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { IoCalendarSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

const TestResults = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: testResults = [], refetch } = useQuery({
        queryKey: ['testResults', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/testResults/${user.email}`);
            return res.data;
        }
    })

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-4xl font-bold text-center">Test Results</h1>
            <div className="min-h-screen p-10">
                <div className="flex justify-between">
                    <h2 className="text-4xl font-bold">Total tests: {testResults.length}</h2>
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                testResults.map((test, index) => <tr key={test._id}>
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
                                        <Link to="/dashboard/reservation">
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

export default TestResults;