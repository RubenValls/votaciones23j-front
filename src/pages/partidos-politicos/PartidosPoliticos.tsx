import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Image, Heading, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function PartidosPoliticos({partidos}: any) {
  const location = useLocation();
  return (
    <>
      <Box mt="20px" w="100%">
        <Box m="20px">
          <Tabs variant='soft-rounded' colorScheme='twitter' align="center" defaultIndex={location?.state?.id ? location?.state?.id : 0}>
            <TabList>
              {
                  partidos.map((partido: any) => {
                      return(
                          <Tab maxWidth="75px" key={partido?.id}>
                              <Image src={partido?.attributes?.logo} alt={partido?.attributes?.nombre}/>
                          </Tab>
                      )
                  })
              }
            </TabList>
            <TabPanels mt="25px">
              {
                  partidos.map((partido: any) => {
                      return(
                          <TabPanel key={partido?.id}>
                              <Image src={partido?.attributes?.logo} alt={partido?.attributes?.nombre} maxWidth="300px" mb="25px"/>
                              <Heading size="lg" mb="25px">
                                {partido?.attributes?.descripcion_corta}
                              </Heading>
                              <Text as="i">
                                {partido?.attributes?.descripcion_larga}
                              </Text>
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
