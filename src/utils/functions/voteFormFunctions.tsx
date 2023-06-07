import { sendVoto } from "../middlewares/votosMiddleware";
import { onSuccess } from "./toastFunctions";

export const validateDni = (dni: string) => {
    const letterDNI = dni.substring(8, 9).toUpperCase();
    const numDNI = parseInt(dni.substring(0, 8));
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    const correctLetter = letters[numDNI % 23];

    return letterDNI === correctLetter
}

export const sendInformation = (values: object, resetForm: any, onClose: any, toast: any) => {
    sendVoto(values).then((response: any) => {
        console.log(response)
        resetForm({ values: { dni: "", voto: "" } });
        onSuccess(toast, "Voto registrado correctamente.");
        onClose();
    })
}