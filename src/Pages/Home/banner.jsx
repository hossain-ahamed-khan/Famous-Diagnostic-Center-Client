import { FiPhoneCall } from "react-icons/fi";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { Link } from "react-router-dom";

const banner = () => {

    return (
        <div className="relative mb-36">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/qmBWxwN/nurse-measuring-patient-blood-pressure.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="w-4/5 flex flex-col lg:flex-row gap-4 justify-between">
                    <div className="max-w-lg ">
                        <h1 className="mb-5 text-5xl font-bold text-white">Accurate Insights for Better Health</h1>
                        <p className="mb-5 pt-6 pb-16 text-white">Welcome to Nokkhotro Diagnostic Center, where precision meets care. Our state-of-the-art facility offers advanced diagnostic services tailored to your health needs.</p>
                        <Link to="/all-tests"><button className="btn bg-[#8aeed5] font-bold">All tests</button></Link>
                    </div>
                    <div className="max-w-lg  px-10 py-4 font-bold bg-[#8aeed5] flex flex-col justify-center items-center rounded-xl text-center">
                        <p>use coupon</p>
                        <h1 className="text-5xl">coupon code 10</h1>
                        <p>for</p>
                        <p className="text-3xl">10% discount</p>
                    </div>
                </div>
            </div>
            <div className="w-full absolute -bottom-24 invisible md:visible">
                <div className="w-4/5 mx-auto flex gap-4 justify-between text-center">
                    <div className="bg-[#00b5ff] p-10 w-72 rounded-xl font-bold space-y-2 border">
                        <FiPhoneCall className="relative left-1/2 -translate-x-1/2" />
                        <h1 className="text-2xl">Hotline</h1>
                        <p>10636</p>
                    </div>
                    <div className="bg-[#00a96e] p-10 w-72 rounded-xl font-bold space-y-2">
                        <FaRegHourglassHalf className="relative left-1/2 -translate-x-1/2" />
                        <h1 className="text-2xl">Working hour</h1>
                        <p>we are open 24/7</p>
                    </div>
                    <div className="bg-[#ffbe00] p-10 w-72 rounded-xl font-bold space-y-2">
                        <MdEmail className="relative left-1/2 -translate-x-1/2" />
                        <h1 className="text-2xl">Email Us</h1>
                        <p className="text-xs">Nokkhotro@Diagnostic.com</p>
                    </div>
                    <div className="bg-[#ff5861] p-10 w-72 rounded-xl font-bold space-y-2">
                        <FaAmbulance className="relative left-1/2 -translate-x-1/2" />
                        <h1 className="text-2xl">Call for Ambulance</h1>
                        <p>345637</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default banner;