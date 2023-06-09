import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/react";
import { tryUpdateVoto } from "../utils/functions/voteFormFunctions";

export default function EditarVotoModal({ isOpen, onCloseEdit, onClose, cancelRef, values, votos, setVotos }: any) {
    const toast = useToast()
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onCloseEdit}
      >
        <AlertDialogOverlay>
          <AlertDialogContent m="10px">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              DNI introducido anteriormente
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Quieres modificar tu voto? Se quedará guardada esta votación a partir de este momento.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCloseEdit}>
                Cancelar
              </Button>
              <Button colorScheme="orange" variant="outline" onClick={() => tryUpdateVoto(values, onCloseEdit, onClose, toast, votos, setVotos)} ml={3}>
                Actualizar voto
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
