import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Image, Heading, Text } from "@chakra-ui/react";

export default function PartidosPoliticos({partidos}: any) {
  return (
    <>
      <Box mt="20px" w="100%">
        <Box m="20px">
          <Tabs variant='soft-rounded' colorScheme='twitter' align="center">
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
