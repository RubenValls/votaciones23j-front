import { getVotos, sendVoto, updateVoto } from "../middlewares/votosMiddleware";
import { onFailure, onSuccess } from "./toastFunctions";

export const validateDni = (dni: string) => {
    const letterDNI = dni.substring(8, 9).toUpperCase();
    const numDNI = parseInt(dni.substring(0, 8));
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    const correctLetter = letters[numDNI % 23];

    return letterDNI === correctLetter
}

export const sendInformation = (values: object, resetForm: any, onClose: any, toast: any, onOpenEdit: any, setVotos: any) => {
    sendVoto(values)
        .then(() => {
            getVotos()
                .then((response: any) => {
                    return response?.data;
                })
                .then((data: Array<JSON>) => {
                    setVotos(data)
                    resetForm({ values: { dni: "", voto: "" } });
                    onSuccess(toast, "Voto registrado correctamente.");
                    onClose();
                })
                .catch((error: Error) => console.log(error));
        })
        .catch(() => {
            onOpenEdit(values)
        })
}

export const tryUpdateVoto = (values: any, onCloseEdit: any, onClose: any, toast: any, votos: any, setVotos: any) => {
    const voto = votos.find((voto: any) => voto?.attributes?.dni === values?.dni)
    setVotos(votos) //setear los votos tras la actualización
    updateVoto(values, voto?.id)
    .then(() => {
        onSuccess(toast, "Voto actualizado correctamente.");
        onCloseEdit();
        onClose();
      })
      .catch(() => {
        onFailure(toast, "Ha sucedido un error, vuelve a intentarlo en unos instantes.");
        onCloseEdit();
      })
}