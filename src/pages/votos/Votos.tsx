import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  VStack,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import VotoModalForm from "../../components/VotoModalForm";
import VotosChart from "../../components/VotosChart";

export default function Votos({votos, setVotos}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box mt="20px" w="100%">
        <Box m="20px">
          <VStack
            spacing="30px"
            justify="center"
            p={10}
            w={"100%"}
            align="stretch"
          >
            <Center>
            <Heading size="lg" as="i" mb="20px" textColor="#1976D2">
                  Gráfico de intención de voto
            </Heading>
            </Center>
            <WrapItem>
              <Center w="100%">
                <Box h="auto">
                  <VotosChart votos={votos}/>
                </Box>
              </Center>
            </WrapItem>
            <WrapItem mt="15px">
              <Center w="100%">
                <HStack spacing="25px">
                  <Button
                    rightIcon={<AiOutlineArrowRight />}
                    colorScheme="blue"
                    onClick={onOpen}
                  >
                    Participar en la encuesta
                  </Button>
                </HStack>
              </Center>
            </WrapItem>
          </VStack>
        </Box>
      </Box>

      <VotoModalForm isOpen={isOpen} onClose={onClose} votos={votos} setVotos={setVotos}/>
    </>
  );
}
