import {
  Box,
  Button,
  Center,
  StackDivider,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getVotos } from "../../middlewares/votosMiddleware";

export default function Votos() {
  const [votos, setVotos] = useState<JSON[]>([]);

  useEffect(() => {
    getVotos().then((response: any) => {
      return response?.data
    })
    .then((data: Array<JSON>) => setVotos(data))
    .catch((error: Error) => console.log(error))
  }, []);

  return (
    <Box mt="20px" w="100%">
      <Box borderWidth="1px" borderRadius="lg" m="20px">
        <VStack spacing="30px" justify="center" p={10} w={"100%"}
                divider={<StackDivider borderColor='gray.200' />}
                align='stretch'
                >
          <WrapItem>
            <Center w="100%">
                <Box h='auto' bg='yellow.200'>
                  GRÁFICO
                </Box>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="100%">
              FORM BOTON
            </Center>
          </WrapItem>
        </VStack>
      </Box>
    </Box>
  );
}
