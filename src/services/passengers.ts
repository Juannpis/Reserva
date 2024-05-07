import { reservasUrls } from "./urls";

export const getPassengers = async () => {
    try {
        const response = await fetch(reservasUrls.passengers.all, {
            headers: new Headers({
                'X-reservas-Access-Token': "token"
            })
        })
        const { passengers } = await response.json()
    } catch (error) {
        console.log(error);
    }
}