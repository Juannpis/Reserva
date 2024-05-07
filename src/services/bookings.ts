import { reservasUrls } from "./urls";

export const getBookings = async () => {
    try {
        const response = await fetch(reservasUrls.bookings.all, {
            headers: new Headers({
                'X-reservas-Access-Token': "token"
            })
        })
        const { bookings } = await response.json()
    } catch (error) {
        console.log(error);
    }
}