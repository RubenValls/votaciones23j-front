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
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";

export default function VotoModalForm({ isOpen, onClose }: any) {
  const DNI_REGEX = /^(\d{8})([A-Z])$/;

  const validationSchema = Yup.object().shape({
    dni: Yup.string()
      .required("El DNI es obligatorio")
      .matches(DNI_REGEX, "El DNI debe contener 8 números y una letra"),
    voto: Yup.string().required("Se debe seleccionar una opción"),
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ dni: "", voto: "" }}
          onSubmit={(values, {resetForm}) => {
            console.log(values);
            resetForm({values: { dni: "", voto: "" }})
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Intención de voto</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl
                    isInvalid={
                      errors.dni && touched.dni && errors.dni ? true : false
                    }
                  >
                    <FormLabel>DNI</FormLabel>
                    <Input
                      placeholder="00000000A"
                      name="dni"
                      id="dni"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dni}
                    />
                    {errors && (
                      <FormErrorMessage>{`${
                        errors.dni && touched.dni && errors.dni
                      }`}</FormErrorMessage>
                    )}
                    <FormHelperText>
                      El DNI solo comprueba la veracidad de la persona, siempre
                      permanecerá privado.
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    mt="15px"
                    isInvalid={
                      errors.voto && touched.voto && errors.voto ? true : false
                    }
                  >
                    <FormLabel>Partido político</FormLabel>
                    <Select
                      placeholder="Selecciona una opción"
                      name="voto"
                      id="voto"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.voto}
                    >
                      <option>PSOE</option>
                      <option>PP</option>
                      <option>VOX</option>
                      <option>SUMAR</option>
                    </Select>
                    {errors && (
                      <FormErrorMessage>{`${
                        errors.voto && touched.voto && errors.voto
                      }`}</FormErrorMessage>
                    )}
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button type="submit" colorScheme="blue" mr={3}>
                    Enviar voto
                  </Button>
                </ModalFooter>
              </ModalContent>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
}