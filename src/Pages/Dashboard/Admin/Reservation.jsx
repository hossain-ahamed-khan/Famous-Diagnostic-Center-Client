import { useLoaderData } from "react-router-dom";

const Reservation = () => {

    const testReservations = useLoaderData();

    return (
        <div>
            <h1>reservations for this {testReservations.title} are:</h1>
        </div>
    );
};

export default Reservation;