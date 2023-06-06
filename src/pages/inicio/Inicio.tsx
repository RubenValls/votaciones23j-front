import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import eleccionesimg from "../../assets/banner23j.png";
import { AiOutlineArrowRight, AiOutlineCheckSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Inicio() {
    const navigate = useNavigate();

  return (
    <>
        <Box mt='20px' p={10} w='100%' textAlign='center'>
            <Center>
                <Heading mb='25px' as='i' size='sm'>¿Quieres conocer el estado de las elecciones 23J?</Heading>
            </Center>
            <Center>
                <Heading mb='25px' size='lg'>¡Observa las votaciones realizadas y participa!</Heading>
            </Center>
            <Center>
                <Heading mb={4} as='i' size='sm'>La información del voto permanecerá anónima</Heading>
            </Center>
        </Box>
        <Box borderWidth='1px' borderRadius='lg' m='20px'>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                    <ListIcon as={AiOutlineCheckSquare} color="blue.500" />
                    Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem>
                    <ListIcon as={AiOutlineCheckSquare} color="blue.500" />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                    <ListIcon as={AiOutlineCheckSquare} color="blue.500" />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                </List>
                </Center>
            </WrapItem>
            </Wrap>
            <Box mt='5px' mb='45px' w='100%'>
                <Center>
                    <Button rightIcon={<AiOutlineArrowRight />} onClick={() => navigate('/votos')} colorScheme='twitter' variant='outline' size='lg'>
                        Participar
                    </Button>
                </Center>
            </Box>
        </Box>
    </>
  );
}
