import { Link, useLoaderData } from "react-router-dom";

const TestDetails = () => {

    const test = useLoaderData();

    return (
        <div className="w-4/5 mx-auto">
            <div className="min-h-screen flex items-center">
                <div className="flex flex-col lg:flex-row-reverse justify-between w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="card-title text-3xl font-bold">{test.title}</h2>
                        <p className="my-6">{test.short_description}</p>
                        <p><span className="font-bold">Price:</span> ${test.price}</p>
                        <p><span className="font-bold">Date:</span> {test.date}</p>
                        <p><span className="font-bold">Available slots:</span> {test.slots.length}</p>
                        <p><span className="font-bold mr-2">Slots:</span>
                            <span className="badge badge-info mr-2">{test.slots[0]}</span>
                            <span className="badge badge-success mr-2">{test.slots[1]}</span>
                            <span className="badge badge-warning mr-2">{test.slots[2]}</span>
                            <span className="badge badge-error mr-2">{test.slots[3]}</span>
                        </p>

                        <div className="mt-10">
                            <Link to={`/payment/${test._id}`}>
                                <button className="btn btn-md bg-[#8aeed5] justify-end">Book Now
                                </button>
                            </Link>
                        </div>

                        {/* Modal button start  */}
                        {/* <div className="mt-10">
                            <button
                                onClick={() => document.getElementById('my_modal_3').showModal()}
                                className="btn btn-md bg-[#8aeed5] justify-end">Book Now</button>

                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <h2 className="font-bold text-2xl text-center mb-3">Payment</h2>

                                    <button
                                        onClick={() => document.getElementById('my_modal_3').close()}
                                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                                    <form>

                                        <div className="grid grid-cols-1 gap-2">

                                            <p><span className="font-bold">Price:</span> $240</p>

                                            <label className="form-control">
                                                <div className="label">
                                                    <span className="label-text">Promocode</span>
                                                </div>
                                                <input type="text" name="pickupLocation" className="input input-bordered w-full " />
                                            </label>

                                            <button className="btn bg-[#8aeed5] font-bold">Apply Promocode</button>

                                            <p><span className="font-bold">Payable Price:</span> $140</p>
                                        </div>

                                        <input
                                            onClick={() => document.getElementById('my_modal_3').close()}
                                            className="my-2 w-full py-2 bg-[#4479e1] rounded-lg cursor-pointer text-slate-200 text-xl font-bold" type="submit" value="Pay" />

                                    </form>
                                </div>
                            </dialog>
                        </div> */}
                        {/* modal button end  */}

                    </div>
                </div>
            </div>
        </div >
    );
};

export default TestDetails;