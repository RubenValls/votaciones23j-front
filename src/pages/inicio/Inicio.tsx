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
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import LogosPartidos from "./components/LogosPartidos";
import { GiArtificialHive } from "react-icons/gi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { VscGistSecret } from "react-icons/vsc";
import { BsFileBarGraph } from "react-icons/bs";


export default function Inicio({ votos, partidos }: any) {
  const navigate = useNavigate();

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
              colorScheme="orange"
              size="lg"
              variant="outline"
              mt="5px"
            >
              Participar en la encuesta
            </Button>
          </VStack>
        </Center>
      </Box>
      <Box mt="15px" p={10} w="100%" textAlign="center" backgroundColor="#feebc8a5" borderTop="1px" borderBottom="1px">
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
      <Box mt="15px" p={10} w="100%" textAlign="center" backgroundColor="#feebc8a5" borderTop="1px" borderBottom="1px">
        <Center>
          <Heading as="i">
            Información sobre la web
          </Heading>
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
              <List spacing={3} textColor="#22324C">
                <ListItem>
                  <ListIcon as={BsFileBarGraph} color="orange" />
                    Esta web tiene como objetivo realizar una encuesta de intención de voto y conocer la realidad social.
                </ListItem>
                <ListItem>
                  <ListIcon as={VscGistSecret} color="orange" />
                    La intención de voto siempre permanecerá anómina, no se compartirá ningún dato personal con terceros.
                </ListItem>
                <ListItem>
                  <ListIcon as={SlEnvolopeLetter} color="orange" />
                  Ejercer el derecho a voto es esencial y, por ello, se invita a toda la ciudadania a participar de las elecciones del 23J.
                </ListItem>
                <ListItem>
                  <ListIcon as={GiArtificialHive} color="orange" />
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
              colorScheme="orange"
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
