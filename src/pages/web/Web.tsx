import { Box, Card, CardBody, CardHeader, Center, Heading, Stack, StackDivider, Text, Wrap, WrapItem, Image, Divider, Button, Link, Tooltip } from "@chakra-ui/react";
import { CiLinkedin } from "react-icons/ci";
import {FiGithub} from "react-icons/fi"
import {MdAlternateEmail} from "react-icons/md"

export default function Web() {
  return (
    <Center>
      <Box padding="20px" maxWidth="1500px">
        <Card>
          <CardHeader>
            <Heading size='md'>Aspectos de interés</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Datos de la web
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Tecnologías utilizadas
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box w="100%">
                <Heading size='xs' textTransform='uppercase'>
                  Sobre el autor
                </Heading>
                <Box> 
                  <Wrap spacing="30px" justify="center" p={10}>
                    <WrapItem>
                      <Center h="auto">
                        <Image src={'https://media.licdn.com/dms/image/C5603AQG8QeLH0sr4CQ/profile-displayphoto-shrink_800_800/0/1579774418282?e=2147483647&v=beta&t=TMcTbevd-HG6iEHqQHv1LCdjQdG0SO0tg4elpJ0D7W0'} alt="ruben-valls" maxW="300px" borderRadius='full' />
                      </Center>
                    </WrapItem>
                    <WrapItem>
                      <Center>
                        <Stack mt='6' spacing='3'>
                          <Heading size='md'>Rubén Valls Aparici</Heading>
                          <Divider />
                          <Text>
                            Desarrollador de Aplicaciones Web.
                          </Text>
                          <Heading size='sm' mt='10px'>Contacto:</Heading>
                          <Center>
                            <Link href='https://www.linkedin.com/in/rubenvallsaparici/' isExternal>
                              <Button colorScheme='orange' variant='outline' maxWidth='50px' m='5px'>
                                <CiLinkedin />
                              </Button>
                            </Link>
                            <Tooltip label='r.vallsaparici@gmail.com'>
                              <Link href='mailto:r.vallsaparici@gmail.com' isExternal>
                                <Button colorScheme='orange' variant='outline' maxWidth='50px'>
                                  <MdAlternateEmail />
                                </Button>
                              </Link>
                            </Tooltip>
                          </Center>
                          <Divider />
                          <Heading size='sm' mt='10px'>Código de la web:</Heading>
                          <Center>
                            <Link href='https://github.com/RubenValls/votaciones23j-front' isExternal>
                                <Button colorScheme='orange' variant='outline' maxWidth='50px'>
                                  <FiGithub />
                                </Button>
                              </Link>
                          </Center>
                          <Divider />
                        </Stack>
                      </Center>
                    </WrapItem>
                  </Wrap>
                </Box>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Center>
  )
}
