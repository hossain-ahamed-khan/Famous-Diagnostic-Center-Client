import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const TestDetails = () => {

    const test = useLoaderData();

    const handleBookNow = () => {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "No available slots found",
            showConfirmButton: false,
            timer: 1500
        });
    }

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
                        <p><span className="font-bold">Available slots:</span> {test.slots_count
                        }</p>
                        <p><span className="font-bold mr-2">Slots:</span>
                            <span className="badge badge-info mr-2">{test.slots[0]}</span>
                            <span className="badge badge-success mr-2">{test.slots[1]}</span>
                            <span className="badge badge-warning mr-2">{test.slots[2]}</span>
                            <span className="badge badge-error mr-2">{test.slots[3]}</span>
                            <span className="badge badge-error mr-2">{test.slots[4]}</span>
                        </p>

                        {
                            test.slots_count > 0 ?
                                <div className="mt-10">
                                    <Link to={`/payment/${test._id}`}>
                                        <button className="btn btn-md bg-[#8aeed5] justify-end">Book Now
                                        </button>
                                    </Link>
                                </div> :
                                <div className="mt-10">
                                    <button onClick={handleBookNow} className="btn btn-md bg-[#8aeed5] justify-end">Book Now
                                    </button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TestDetails;