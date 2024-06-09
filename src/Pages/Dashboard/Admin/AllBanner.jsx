import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useBanners from "../../../hooks/useBanners";
import { FaTrashAlt } from "react-icons/fa";
import { VscVmActive } from "react-icons/vsc";
import { MdHideImage } from "react-icons/md";

const AllBanner = () => {

    const [banners, , refetch] = useBanners();
    const axiosSecure = useAxiosSecure();

    // const handleMakeActive = banner => {
    //     Swal.fire({
    //         title: "Make Admin",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosSecure.patch(`/users/admin/${banner._id}`)
    //                 .then(res => {
    //                     if (res.data.modifiedCount > 0) {
    //                         refetch();
    //                         Swal.fire({
    //                             title: "Changed!",
    //                             text: "This user is now Admin.",
    //                             icon: "success"
    //                         });
    //                     }
    //                 })
    //         }
    //     });
    // }


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
                const res = await axiosSecure.delete(`/banners/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        title: "Banner Deleted successfully",
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
            <h1 className="text-4xl font-bold text-center">Manage banners</h1>
            <div className="min-h-screen p-10">
                <div className="flex justify-between">
                    <h2 className="text-4xl font-bold">Total banners: {banners.length}</h2>
                </div>

                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#63b9db]">
                            <tr>
                                <th>#</th>
                                <th>BANNER IMAGE</th>
                                <th>BANNER TITLE</th>
                                <th>COUPON</th>
                                <th>DISCOUNT</th>
                                <th>STATUS</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                banners.map((banner, index) => <tr key={banner._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="mask mask-squire w-20 h-20">
                                            <img src={banner.image} />
                                        </div>
                                    </td>
                                    <td>
                                        {banner.title}
                                    </td>
                                    <td>{banner.coupon_code}</td>
                                    <td>
                                        {banner.discount}%
                                    </td>
                                    <td>
                                        {
                                            banner.isActive ?
                                                <VscVmActive className="text-white" />
                                                :
                                                <button
                                                    onClick={() => handleMakeActive(banner)} className="btn bg-[#8aeed5]"
                                                ><MdHideImage />
                                                </button>
                                        }
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(banner._id)}
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

export default AllBanner;