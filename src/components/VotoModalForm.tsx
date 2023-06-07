import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Input,
} from "@chakra-ui/react";

export default function VotoModalForm({isOpen, onClose}: any) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Intención de voto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>DNI</FormLabel>
              <Input placeholder="00000000A" />
              <FormHelperText>
                El DNI solo comprueba la veracidad de la persona, siempre
                permanecerá privado.
              </FormHelperText>
            </FormControl>
            <FormControl mt="15px">
              <FormLabel>Partido político</FormLabel>
              <Select placeholder="Selecciona una opción" isRequired>
                <option>PSOE</option>
                <option>PP</option>
                <option>VOX</option>
                <option>SUMAR</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3} onClick={onClose}>
              Enviar voto
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
