import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddBanner = () => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const bannerItem = {
            title: data.title,
            image: data.imageURL,
            coupon_code: data.couponCode,
            description: data.description,
            discount: parseFloat(data.discount),
            isActive: false
        }

        const bannerRes = await axiosSecure.post("/banners", bannerItem)
        if (bannerRes.data.insertedId) {
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: 'Banner Added successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-4xl font-bold text-center">Add Banner</h1>
            <div className="min-h-screen p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Banner Title*</span>
                            </div>
                            <input {...register("title", { required: true })} type="text" placeholder="banner title" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Banner Image URL*</span>
                            </div>
                            <input {...register("imageURL", { required: true })} type="text" placeholder="image URL " className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Coupon Code*</span>
                            </div>
                            <input {...register("couponCode", { required: true })} type="text" placeholder="coupon code" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Discount*</span>
                            </div>
                            <input {...register("discount", { required: true })} type="number" placeholder="discount percentage" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control w-full my-4">
                        <div className="label">
                            <span className="label-text">Description*</span>
                        </div>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered w-full h-52" placeholder="Recipe Details"></textarea>
                    </label>

                    <button type="submit" className="btn bg-[#4479e1] text-white" >
                        Add Banner
                    </button>
                </form>
            </div >
        </div >
    );
};

export default AddBanner;