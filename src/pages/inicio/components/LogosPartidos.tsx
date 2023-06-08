import { Image, Wrap, WrapItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

export default function LogosPartidos({partidos}: any) {
    const navigate = useNavigate();
    
  return (
        <Wrap spacing="100px" justify="center" p={10}>
            {
                partidos.map((partido: any) => {
                    return(
                        <WrapItem maxWidth="200px" key={partido?.id} onClick={() => navigate("/votos")}>
                            <Image src={partido?.attributes?.logo} alt={partido?.attributes?.nombre}/>
                        </WrapItem>
                    )
                })
            }
        </Wrap>
  )
}
