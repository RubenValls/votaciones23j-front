import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import eleccionesimg from "../../assets/banner23j.png";
import { AiOutlineArrowRight, AiOutlineCheckSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getPartidos } from "../../utils/middlewares/partidosMiddleware";
import { useEffect, useState } from "react";
import LogosPartidos from "./components/LogosPartidos";

export default function Inicio({ votos }: any) {
  const navigate = useNavigate();
  const [partidos, setPartidos] = useState<JSON[]>([]);


  useEffect(() => {
    getPartidos()
      .then((response: any) => {
        return response?.data;
      })
      .then((data: Array<JSON>) => (setPartidos(data), console.log(data)))
      .catch((error: Error) => console.log(error));
  }, []);

  return (
    <>
      <Box mt="20px" p={10} w="100%" textAlign="center">
        <Center>
          <VStack>
            <Heading>Participación actual:</Heading>
            <Heading as="i" size="md" mt="5px">
              {votos?.length} personas
            </Heading>
            <Button
              rightIcon={<AiOutlineArrowRight />}
              onClick={() => navigate("/votos")}
              colorScheme="twitter"
              size="lg"
              variant="outline"
              mt="5px"
            >
              Participar en la encuesta
            </Button>
          </VStack>
        </Center>
      </Box>
      <Box mt="15px" p={10} w="100%" textAlign="center">
        <Center>
          <Heading as="i">
            ¿Qué partidos políticos se presentan a las elecciones del 23J?
          </Heading>
        </Center>
      </Box>
      <Box p={10} w="100%" textAlign="center">
        <Center>
          <LogosPartidos partidos={partidos}/>
        </Center>
      </Box>
      <Box m="20px">
        <Wrap spacing="30px" justify="center" p={10}>
          <WrapItem>
            <Center maxW="600" h="auto">
              <Image src={eleccionesimg} alt="elecciones23j" w="100%" />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="auto" h="100%" ml="20px">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={AiOutlineCheckSquare} color="blue.500" />
                    Esta web tiene como objetivo realizar una encuesta de intención de voto y conocer la realidad social.
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineCheckSquare} color="blue.500" />
                    La intención de voto siempre permanecerá anómina, no se compartirá ningún dato personal con terceros.
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineCheckSquare} color="blue.500" />
                  Ejercer el derecho a voto es esencial y, por ello, se invita a toda la ciudadania a participar de las elecciones del 23J.
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineCheckSquare} color="blue.500" />
                  Toda la información sobre los partidos se ha realizado con el uso de IA de la manera más objetiva posible.
                </ListItem>
              </List>
            </Center>
          </WrapItem>
        </Wrap>
        <Box mt="5px" mb="45px" w="100%">
          <Center>
            <Button
              rightIcon={<AiOutlineArrowRight />}
              onClick={() => navigate("/votos")}
              colorScheme="twitter"
              variant="outline"
              size="lg"
            >
              Participar
            </Button>
          </Center>
        </Box>
      </Box>
    </>
  );
}
