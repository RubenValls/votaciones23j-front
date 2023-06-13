import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Image, Heading, Text, Button, useToast, Divider, Wrap, Spinner } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { onFailure } from "../../utils/functions/toastFunctions";

export default function PartidosPoliticos({partidos}: any) {
  const location = useLocation();
  const toast = useToast();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const TwitterTimelineEmbed = require('react-twitter-embed');

  return (
    <>
      <Box mt="20px" w="100%">
        <Box m="20px">
          <Tabs variant='soft-rounded' colorScheme='twitter' align="center" defaultIndex={location?.state?.id ? location?.state?.id : 0}>
            <TabList>
              <Wrap spacing="15px" justify="center" p={10}>
                {
                    partidos.map((partido: any) => {
                        return(
                            <Tab maxWidth="100px" key={partido?.id}>
                                <Image src={partido?.attributes?.logo} alt={partido?.attributes?.partido} />
                            </Tab>
                        )
                    })
                }
              </Wrap>
            </TabList>
            <TabPanels mt="25px">
              {
                  partidos.map((partido: any) => {
                      return(
                          <TabPanel key={partido?.id} maxWidth="1000px">
                              <Image src={partido?.attributes?.logo} alt={partido?.attributes?.partido} maxWidth="300px" mb="25px"/>
                              <Heading size="lg" mb="25px" >
                                {partido?.attributes?.descripcion_corta}
                              </Heading>
                              <Text as="i" maxW="1000px">
                                {partido?.attributes?.descripcion_larga}
                              </Text>
                              <Heading size="lg" mb="25px" mt="25px">
                                {partido?.attributes?.nombre_candidato}
                              </Heading>
                              <Image src={partido?.attributes?.img_candidato} alt={partido?.attributes?.nombre_candidato} maxWidth="300px" mb="25px" borderRadius='3xl'/>
                              <Text as="i">
                                {partido?.attributes?.descripcion_candidato}
                              </Text>
                              <Divider mt="25px"/>
                              <Box mt="10px">
                                  <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName={partido?.attributes?.twitter}
                                    options={{height: 500}}
                                    placeholder={<Spinner
                                      mt="15px"
                                      thickness='4px'
                                      speed='0.65s'
                                      emptyColor='gray.200'
                                      color='orange'
                                      size='xl'
                                    />}
                                  />
                              </Box>
                              <Divider mt="25px"/>
                              <Button
                                rightIcon={<HiDownload />}
                                onClick={() => onFailure(toast, "Programa electoral no disponible, vuelve a intentarlo próximamente")}
                                colorScheme="orange"
                                size={window.innerWidth > 450 ? "lg" : "sm"}
                                variant="outline"
                                mt="25px"
                                >
                                Descargar programa - {partido?.attributes?.partido.toUpperCase()}
                              </Button>
                          </TabPanel>
                      )
                  })
              }
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  )
}
