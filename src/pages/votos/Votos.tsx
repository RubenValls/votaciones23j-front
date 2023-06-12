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
      <Box w="100%">
        <Box>
          <VStack
            spacing="30px"
            justify="center"
            w={"100%"}
            align="stretch"
          >
            <Center>
            <Heading size="lg" as="i" textColor="#1976D2" mt="10px">
                  Gráfico de intención de voto
            </Heading>
            </Center>
            <Box>
              <Center w="100%">
                <HStack spacing="25px">
                  <Button
                    rightIcon={<AiOutlineArrowRight />}
                    colorScheme="blue"
                    variant="outline"
                    onClick={onOpen}
                  >
                    Participar en la encuesta
                  </Button>
                </HStack>
              </Center>
            </Box>
            <Box>
              <Center w="100%">
                <Box h="auto">
                  <VotosChart votos={votos}/>
                </Box>
              </Center>
            </Box>
          </VStack>
        </Box>
      </Box>

      <VotoModalForm isOpen={isOpen} onClose={onClose} votos={votos} setVotos={setVotos}/>
    </>
  );
}
