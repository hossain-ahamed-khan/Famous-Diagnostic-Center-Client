import { Link } from "react-router-dom";
import useTests from "../../hooks/useTests";

const AllTests = () => {

    const [tests] = useTests();

    return (
        <section className="mb-10">
            <div className="w-2/3 mx-auto text-center py-6">
                <h1 className="text-4xl font-bold mb-4"> All Tests</h1>
                <p className="my-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, earum odio? Sequi eos vel repellendus perspiciatis accusamus commodi molestias totam?</p>
            </div>

            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    tests.map(test =>
                        <div key={test._id}>
                            <div className="card shadow-xl h-[780px]">
                                <figure><img className="w-full h-96" src={test.image} alt="Album" /></figure>
                                <div className="card-body ">
                                    <h2 className="card-title text-3xl font-bold">{test.title}</h2>
                                    <p className="my-6">{test.short_description}</p>
                                    <p><span className="font-bold">Date:</span> {test.date}</p>
                                    <p><span className="font-bold mr-2">Slots: </span>
                                        <span className="badge badge-info mr-2">{test.slots[0]}</span>
                                        <span className="badge badge-success mr-2">{test.slots[1]}</span>
                                        <span className="badge badge-warning mr-2">{test.slots[2]}</span>
                                        <span className="badge badge-error mr-2">{test.slots[3]}</span>
                                        <span className="badge badge-error mr-2">{test.slots[4]}</span>
                                    </p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/test-details/${test._id}`}><button className="btn bg-[#8aeed5] font-bold">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </section>
    );
};

export default AllTests;