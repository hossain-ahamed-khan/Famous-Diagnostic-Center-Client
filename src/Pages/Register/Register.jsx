import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name)
                    .then(() => {
                        // send user info to the database 
                        const userInfo = {
                            name: data.name,
                            image: res.data.data.display_url,
                            email: data.email,
                            blood_group: data.blood_group,
                            status: "active",
                        }
                        console.log(userInfo);
                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "center",
                                        title: "User created successfully",
                                        icon: "success",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate("/");
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full lg:w-1/2 mx-auto">
                    <div className="card shrink-0 w-full border-2 shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center mt-5">Register</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" name="name" placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
                                    {errors.name && <span className="text-red-600">This field is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upload Image</span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })} />
                                    {errors.name && <span className="text-red-600">This field is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                                    })} />
                                    {errors.email?.type === "required" && <span className="text-red-600">This field is required</span>}
                                    {errors.email?.type === "pattern" && <span className="text-red-600">Enter a correct email format</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Blood Group</span>
                                    </label>
                                    <select className="select select-bordered w-full" defaultValue="default" {...register("blood_group", { required: true })}>
                                        <option disabled value="default">Select a group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                    {errors.blood_group?.type === "required" && <span className="text-red-600">This field is required</span>}
                                </div>

                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">District</span>
                                    </label>
                                    <select className="select select-bordered w-full" defaultValue="default" {...register("district", { required: true })}>
                                        <option disabled value="default">Select a district</option>
                                        <option value="dhaka">Dhaka</option>
                                    </select>
                                    {errors.district?.type === "required" && <span className="text-red-600">This field is required</span>}
                                </div> */}

                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upazila</span>
                                    </label>
                                    <select className="select select-bordered w-full" defaultValue="default" {...register("upazila", { required: true })}>
                                        <option disabled value="default">Select a upazila of dhaka</option>
                                        <option value="DakkhinKhan">DakkhinKhan</option>
                                    </select>
                                    {errors.upazila?.type === "required" && <span className="text-red-600">This field is required</span>}
                                </div> */}

                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upload image</span>
                                    </label>
                                    <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                                    {errors.image && <span className="text-red-600">This field is required</span>}
                                </div> */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/
                                    })} />
                                    {errors.password?.type === "required" && <span className="text-red-600">password is required</span>}
                                    {errors.password?.type === "minLength" && <span className="text-red-600">password must be 6 characters</span>}
                                    {errors.password?.type === "maxLength" && <span className="text-red-600">password must be less then 20 characters</span>}
                                    {errors.password?.type === "pattern" && <span className="text-red-600">password should contain at least one uppercase, one lowercase, one digits and one special characters.</span>}
                                </div>

                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("confirm_password")} />
                                </div> */}

                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-[#8aeed5] font-bold" value="Register" />
                            </div>

                        </form>
                        <div className="text-center mb-4">
                            <p><small>Already have an account? <Link className="text-[#4479e1] font-bold" to="/login">Go to log in</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;