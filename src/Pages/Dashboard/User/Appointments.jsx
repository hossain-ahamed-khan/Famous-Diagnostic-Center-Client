import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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

    return (
        <div>
            <h1>all upcoming appointments: {bookedTests.length}</h1>
        </div>
    );
};

export default AppointMents;