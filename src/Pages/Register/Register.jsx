import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                updateUserProfile(data.name)
                    .then(() => {
                        console.log("user profile updated")
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            blood_group: data.blood_group,
                            district: data.district,
                            upazila: data.upazila,
                        }
                        console.log(userInfo)

                        navigate("/");
                    })
                    .catch(error => console.log(error))
            })
        // send user info to the database 
        // const userInfo = {
        //     name: data.name,
        //     email: data.email,
        //     blood_group: data.blood_group,
        //     district: data.district,
        //     upazila: data.upazila,
        // }
        // console.log(userInfo);
        // axiosPublic.post("/user", userInfo)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             reset();
        //             Swal.fire({
        //                 position: "center",
        //                 title: "User created successfully",
        //                 icon: "success",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //             navigate("/");
        //         }
        //     })
        // })
        // .catch(error => console.log(error))
    }

    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content w-1/2 mx-auto">
                    <div className="card shrink-0 w-full border-2">
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

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">District</span>
                                    </label>
                                    <select className="select select-bordered w-full" defaultValue="default" {...register("district", { required: true })}>
                                        <option disabled value="default">Select a district</option>
                                        <option value="dhaka">Dhaka</option>
                                        <option value="gajipur">Gajipur</option>
                                        <option value="kishoreganj">Kishoreganj</option>
                                    </select>
                                    {errors.district?.type === "required" && <span className="text-red-600">This field is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upazila</span>
                                    </label>
                                    <select className="select select-bordered w-full" defaultValue="default" {...register("upazila", { required: true })}>
                                        <option disabled value="default">Select a upazila of dhaka</option>
                                        <option value="DakkhinKhan">DakkhinKhan</option>
                                        <option value="khilkhet">khilkhet</option>
                                        <option value="Biman_bandar">Biman Bandar</option>
                                    </select>
                                    {errors.upazila?.type === "required" && <span className="text-red-600">This field is required</span>}
                                </div>

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
                                <input type="submit" className="btn bg-[#D1A054]" value="Register" />
                            </div>

                        </form>
                        <div className="text-center mb-4">
                            <p><small>Already have an account? <Link className="text-[#D1A054]" to="/login">Go to log in</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;