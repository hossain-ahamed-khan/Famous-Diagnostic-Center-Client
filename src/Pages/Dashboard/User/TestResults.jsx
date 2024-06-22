import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TestResults = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: testResults = [] } = useQuery({
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
                    <h2 className="text-4xl font-bold">Total test Results: {testResults.length}</h2>
                </div>

                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#63b9db]">
                            <tr>
                                <th>#</th>
                                <th>TEST NAME</th>
                                <th>USER EMAIL</th>
                                <th>REPORT STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                testResults.map((test, index) =>
                                    <tr key={test._id}>
                                        <td>{index + 1}</td>
                                        <td>{test.testName}</td>
                                        <td>{test.email}</td>
                                        <td>{test.reportStatus}</td>
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