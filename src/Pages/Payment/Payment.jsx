import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {

    const test = useLoaderData();

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-4xl font-bold text-center mt-20 mb-10">Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm test={test} />
            </Elements>
        </div>
    );
};

export default Payment;