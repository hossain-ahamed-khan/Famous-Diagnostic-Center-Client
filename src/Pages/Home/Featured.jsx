
const Featured = () => {
    return (
        <section>
            <div className="w-2/3 mx-auto text-center py-6">
                <h1 className="text-4xl font-bold mb-4"> All Featured Tests</h1>
                <p className="my-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, earum odio? Sequi eos vel repellendus perspiciatis accusamus commodi molestias totam?</p>
            </div>

            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                <div className="card shadow-xl">
                    <figure><img className="w-full h-72" src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title text-3xl font-bold">New album is released!</h2>
                        <p className="my-6">Click the button to listen on Spotiwhy app. Click the button to listen on Spotiwhy app</p>
                        <p><span className="font-bold">Date:</span> 10 july 2024</p>
                        <p><span className="font-bold mr-2">Slots:</span>
                            <span className="badge badge-info mr-2">10am - 12pm</span>
                            <span className="badge badge-success mr-2">12pm - 2pm</span>
                            <span className="badge badge-warning mr-2">2pm - 4pm</span>
                            <span className="badge badge-error mr-2">4pm - 6pm</span>
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#8aeed5] font-bold">Details</button>
                        </div>
                    </div>
                </div>

                <div className="card shadow-xl">
                    <figure><img className="w-full h-72" src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title text-3xl font-bold">New album is released!</h2>
                        <p className="my-6">Click the button to listen on Spotiwhy app. Click the button to listen on Spotiwhy app</p>
                        <p><span className="font-bold">Date:</span> 10 july 2024</p>
                        <p><span className="font-bold mr-2">Slots:</span>
                            <span className="badge badge-info mr-2">10am - 12pm</span>
                            <span className="badge badge-success mr-2">12pm - 2pm</span>
                            <span className="badge badge-warning mr-2">2pm - 4pm</span>
                            <span className="badge badge-error mr-2">4pm - 6pm</span>
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#8aeed5] font-bold">Details</button>
                        </div>
                    </div>
                </div>

                <div className="card shadow-xl">
                    <figure><img className="w-full h-72" src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title text-3xl font-bold">New album is released!</h2>
                        <p className="my-6">Click the button to listen on Spotiwhy app. Click the button to listen on Spotiwhy app</p>
                        <p><span className="font-bold">Date:</span> 10 july 2024</p>
                        <p><span className="font-bold mr-2">Slots:</span>
                            <span className="badge badge-info mr-2">10am - 12pm</span>
                            <span className="badge badge-success mr-2">12pm - 2pm</span>
                            <span className="badge badge-warning mr-2">2pm - 4pm</span>
                            <span className="badge badge-error mr-2">4pm - 6pm</span>
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#8aeed5] font-bold">Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Featured;