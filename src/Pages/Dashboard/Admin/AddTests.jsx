import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddTests = () => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        const testItem = {
            title: data.name,
            image: data.imageURL,
            date: data.date,
            slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
            short_description: data.description,
            price: parseFloat(data.price),
            slots_count: 5
        }

        const testRes = await axiosSecure.post("/tests", testItem)
        if (testRes.data.insertedId) {
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.name} Added successfully`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-4xl font-bold text-center">Add Test</h1>
            <div className="min-h-screen p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Test Name*</span>
                            </div>
                            <input {...register("name", { required: true })} type="text" placeholder="test name" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Test Image URL*</span>
                            </div>
                            <input {...register("imageURL", { required: true })} type="text" placeholder="image URL " className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Date*</span>
                            </div>
                            <input {...register("date", { required: true })} type="text" placeholder="DD/MM/YY" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control w-full my-4">
                        <div className="label">
                            <span className="label-text">Short Description*</span>
                        </div>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered w-full h-52" placeholder="Recipe Details"></textarea>
                    </label>

                    <button type="submit" className="btn bg-[#4479e1] text-white" >
                        Add Test
                    </button>
                </form>
            </div >
        </div >
    );
};

export default AddTests;