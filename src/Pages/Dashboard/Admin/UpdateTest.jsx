import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UpdateTest = () => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm()
    const updateTest = useLoaderData();
    const { _id, title, image, date, price, short_description } = updateTest;

    const onSubmit = async (data) => {
        const updatedTestItem = {
            title: data.name,
            image: data.imageURL,
            date: data.date,
            slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
            short_description: data.description,
            price: parseFloat(data.price)
        }

        const testRes = await axiosSecure.put(`/tests/${_id}`, updatedTestItem)
        if (testRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.name} updated successfully`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-4xl font-bold text-center">Update Test</h1>
            <div className="min-h-screen p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Test Name*</span>
                            </div>
                            <input {...register("name", { required: true })} defaultValue={title} type="text" placeholder="test name" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Test Image URL*</span>
                            </div>
                            <input {...register("imageURL", { required: true })} defaultValue={image} type="text" placeholder="image URL " className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Date*</span>
                            </div>
                            <input {...register("date", { required: true })} defaultValue={date} type="text" placeholder="DD/MM/YY" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register("price", { required: true })} defaultValue={price} type="number" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control w-full my-4">
                        <div className="label">
                            <span className="label-text">Short Description*</span>
                        </div>
                        <textarea {...register("description", { required: true })} defaultValue={short_description} className="textarea textarea-bordered w-full h-52" placeholder="Recipe Details"></textarea>
                    </label>

                    <button type="submit" className="btn bg-[#4479e1] text-white" >
                        Update Test
                    </button>
                </form>
            </div >
        </div >
    );
};

export default UpdateTest;