import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useBookedTest = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: bookTests = [], isPending: loading, refetch } = useQuery({
        queryKey: ['bookTests', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bookTests/${user.email}`);
            return res.data;
        }
    })

    return [bookTests, loading, refetch];
};

export default useBookedTest;