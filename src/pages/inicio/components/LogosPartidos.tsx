import { Image, Box } from '@chakra-ui/react'

export default function LogosPartidos({partidos}: any) {
  return (
        partidos.map((partido: any) => {
            return(
                <Box boxSize='sm' key={partido?.id}>
                    <Image src={partido?.attributes?.logo} alt={partido?.attributes?.nombre}/>
                </Box>
            )
        })
  )
}
