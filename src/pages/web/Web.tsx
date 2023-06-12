import { Box, Card, CardBody, CardHeader, Center, Heading, Stack, StackDivider, Text, Wrap, WrapItem, Image, Divider, Button, Link, Tooltip, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CiLinkedin } from "react-icons/ci";
import {FiGithub} from "react-icons/fi"
import {MdAlternateEmail} from "react-icons/md"
import {BiCodeAlt, BiMessageAltDots, BiStats} from "react-icons/bi"
import {FaRegEye} from "react-icons/fa"
import { VscGistSecret } from "react-icons/vsc";


export default function Web() {
  return (
    <Center>
      <Box padding="20px" maxWidth="850px" minWidth="200px">
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
                <Box mt='10px'>
                    <List spacing='15px' textAlign='start'>
                      <ListItem>
                        <ListIcon as={BiCodeAlt} color="orange" />
                          El objetivo de la web es poner en práctica conocimientos tecnológicos relacionados con Front y Back End. 
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaRegEye} color="orange" />
                          La finalidad de la web es observar la intención de voto de la sociedad desde un punto de vista objetivo.
                      </ListItem>
                      <ListItem>
                        <ListIcon as={VscGistSecret} color="orange" />
                        Cualquier tipo de información aportada permanecerá privada y jamás será compartida a terceros.
                      </ListItem>
                      <ListItem>
                        <ListIcon as={BiStats} color="orange" />
                        Los partidos corresponden a aquellos con más % de votos en las pasadas elecciones generales del 2019.
                      </ListItem>
                      <ListItem>
                        <ListIcon as={BiMessageAltDots} color="orange" />
                        Para cualquier propuesta de mejora, al final de esta página se encuentran los datos de contacto.
                      </ListItem>
                    </List>
                </Box>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Tecnologías utilizadas
                </Heading>
                <Box>
                  <Center>
                  <Wrap spacing="75px" justify="center" padding="20px">
                    <WrapItem>
                      <Center w="150px" h="auto">
                        <Link href="https://es.react.dev/" isExternal>
                          <Tooltip label='React' placement='auto'>
                          <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                            alt="React"
                          />
                          </Tooltip>
                        </Link>
                      </Center>
                    </WrapItem>
                    <WrapItem>
                      <Center w="150px" h="auto">
                        <Link href="https://reactrouter.com/en/main" isExternal>
                          <Tooltip label='React-Router' placement='auto'>
                          <Image
                            src="https://reactrouter.com/_brand/react-router-mark-color.png"
                            alt="ReactRouter"
                          />
                          </Tooltip>
                        </Link>
                      </Center>
                    </WrapItem>
                    <WrapItem>
                      <Center w="150px" h="auto">
                        <Link href="https://mui.com/" isExternal>
                          <Tooltip label='MaterialUI' placement='auto'>
                          <Image
                            src="https://mui.com/static/logo.png"
                            alt="MaterialUI"
                          />
                          </Tooltip>
                        </Link>
                      </Center>
                    </WrapItem>
                    <WrapItem>
                      <Center w="150px" h="auto">
                        <Link href="https://chakra-ui.com" isExternal>
                          <Tooltip label='Chakra UI' placement='auto'>
                          <Image
                            src="https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png"
                            alt="Chakra UI"
                          />
                          </Tooltip>
                        </Link>
                      </Center>
                    </WrapItem>
                    <WrapItem>
                      <Center w="150px" h="auto">
                        <Link href="https://strapi.io/" isExternal>
                          <Tooltip label='Strapi' placement='auto'>
                          <Image
                            src="https://cdn.worldvectorlogo.com/logos/strapi-2.svg"
                            alt="Strapi"
                          />
                          </Tooltip>
                        </Link>
                      </Center>
                    </WrapItem>
                    <WrapItem>
                      <Center w="150px" h="auto">
                        <Link href="https://www.chartjs.org/" isExternal>
                          <Tooltip label='ChartJS' placement='auto'>
                          <Image
                            src="https://asset.brandfetch.io/idFdo8ulhr/idzj34qGQm.png"
                            alt="ChartJS"
                          />
                          </Tooltip>
                        </Link>
                      </Center>
                    </WrapItem>
                    <WrapItem>
                      <Center w="150px" h="auto">
                        <Link href="https://formik.org/" isExternal>
                          <Image
                            src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png"
                            alt="Formik"
                          />
                        </Link>
                      </Center>
                    </WrapItem>
                    <WrapItem>
                      <Center w="150px" h="auto">
                        <Link href="https://www.npmjs.com/package/yup" isExternal>
                          <Image
                            src="https://media.licdn.com/dms/image/C4D0BAQHHQHP6KFmrNQ/company-logo_200_200/0/1663569046136?e=2147483647&v=beta&t=UpFHV8IOJGbB8MvLaEVX8XvyOC5uRKWqMmgYW-S0PuE"
                            alt="Yup"
                          />
                        </Link>
                      </Center>
                    </WrapItem>
                    <WrapItem>
                      <Center w="150px" h="auto">
                        <Link href="https://vitejs.dev/" isExternal>
                          <Tooltip label='Vite' placement='auto'>
                          <Image
                            src="https://vitejs.dev/logo-with-shadow.png"
                            alt="Vite"
                          />
                          </Tooltip>
                        </Link>
                      </Center>
                    </WrapItem>
                    <WrapItem>
                      <Center w="150px" h="auto">
                        <Link href="https://vercel.com/" isExternal>
                          <Tooltip label='Vercel' placement='auto'>
                          <Image
                            src="https://images.ctfassets.net/c63hsprlvlya/7otp3Ofpdr8sCedYnSewGn/da3393cae2fdc7f3cedca1f0c1b46fc1/logo-vercel-svgrepo-com.svg"
                            alt="Vercel"
                          />
                          </Tooltip>
                        </Link>
                      </Center>
                    </WrapItem>
                    <WrapItem>
                      <Center w="150px" h="auto">
                        <Link href="https://railway.app/" isExternal>
                          <Tooltip label='Railway' placement='auto'>
                          <Image
                            src="https://railway.app/brand/logo-dark.svg"
                            alt="Railway"
                          />
                          </Tooltip>
                        </Link>
                      </Center>
                    </WrapItem>
                  </Wrap>
                  </Center>
                </Box>
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
