import { Link as RouteLink } from "react-router-dom";
import { Flex, Center, Heading, Text, Box, Image, ScaleFade, Link, SimpleGrid } from "@chakra-ui/react";

export default function LandingPage(){
  const year = new Date().getFullYear();

  return (
    <Box w='100%'>
      <Center zIndex='10' w='100%' h='100%' padding='24px'>
        <Flex direction='column' alignItems='center' >
          <ScaleFade initialScale={0} in>
            <Image src='Assets/Images/bg.png' w={['800px', '600px']} h='auto' position='relative' />
          </ScaleFade>
          <Heading 
            zIndex='10'
            size={['2xl', '3xl']}
            w='100%'
            color='yellow.200'
            marginBottom='24px'
            fontFamily="'Rubik Vinyl', cursive"
            textAlign='center'
            position='relative'
          >Vehicly</Heading>
          <Text
            zIndex='10'
            color="white" 
            fontFamily="'Nixie One', bold" 
            fontWeight='extrabold' 
            fontSize={['xl', '2xl', '3xl']}
            textAlign='center'
            position='relative'
          >
            Vehicle, spare parts and accessories dealership. Make your order below.
          </Text>
          <SimpleGrid columns={2} gap={2} marginTop='24px' fontSize={['xs', 'sm']}>
            <Link 
              as={RouteLink}
              to="/bikes"
              textAlign='center'
              width={{ base: "140px", sm: "180px", md: "240px" }}
              padding='12px 24px'
              bgColor='inherit'
              border='1px solid'
              borderColor='yellow.200'
              color='#fff' fontWeight='300'
              _hover={{ color: 'yellow.200', borderColor: 'yellow.500'}}
            >
              Bikes
            </Link>
            <Link 
              as={RouteLink}
              to="/biker-wear"
              textAlign='center'
              padding='12px 24px'
              bgColor='inherit'
              border='1px solid'
              borderColor='yellow.200'
              color='#fff' fontWeight='300'
              _hover={{ color: 'yellow.200', borderColor: 'yellow.500'}}
            >
              Biker Wear
            </Link>
            <Link 
              as={RouteLink}
              to="/accessories"
              textAlign='center'
              padding='12px 24px'
              bgColor='inherit'
              border='1px solid'
              borderColor='yellow.200'
              color='#fff' fontWeight='300'
              _hover={{ color: 'yellow.200', borderColor: 'yellow.500'}}
            >
              Accessories
            </Link>
            <Link 
              href="https://wa.me/c/256786202161"
              target="_blank"
              textAlign='center'
              padding='12px 24px'
              bgColor='inherit'
              border='1px solid'
              borderColor='yellow.200'
              color='#fff' fontWeight='300'
              _hover={{ color: 'yellow.200', borderColor: 'yellow.500'}}
            >
              WhatsApp
            </Link>
          </SimpleGrid>
          <Text color='#fff' margin='24px' fontSize={['xs', 'sm', 'xl']}>&copy; Vehicly {year}</Text>
        </Flex>
      </Center>
    </Box>
  );
}