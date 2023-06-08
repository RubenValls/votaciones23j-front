import {
  Box,
  Button,
  Center,
  HStack,
  StackDivider,
  VStack,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getVotos } from "../../utils/middlewares/votosMiddleware";
import { AiOutlineArrowRight } from "react-icons/ai";
import VotoModalForm from "../../components/VotoModalForm";
import VotosChart from "../../components/VotosChart";

export default function Votos() {
  const [votos, setVotos] = useState<JSON[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getVotos()
      .then((response: any) => {
        return response?.data;
      })
      .then((data: Array<JSON>) => setVotos(data))
      .catch((error: Error) => console.log(error));
  }, [onClose]);

  return (
    <>
      <Box mt="20px" w="100%">
        <Box borderWidth="1px" borderRadius="lg" m="20px">
          <VStack
            spacing="30px"
            justify="center"
            p={10}
            w={"100%"}
            divider={<StackDivider borderColor="gray.200" />}
            align="stretch"
          >
            <WrapItem>
              <Center w="100%">
                <Box h="auto">
                  <VotosChart votos={votos}/>
                </Box>
              </Center>
            </WrapItem>
            <WrapItem>
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
