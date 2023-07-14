import { Flex, Center, Heading, Text, Box, Image, Button, ScaleFade } from "@chakra-ui/react";

export default function LandingPage(){
  const year = new Date().getFullYear();

  return (
    <Box w='100%'>
      <Center zIndex='10' w='100%' h='100%' padding='24px'>
        <Flex direction='column' alignItems='center' >
          <ScaleFade initialScale={0} in>
            <Image src='Assets/Images/bg.png' w='800px' h='auto' position='relative' />
          </ScaleFade>
          <Heading 
            zIndex='10'
            size='4xl'
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
            fontSize='3xl'
            textAlign='center'
            position='relative'
          >
            Vehicle and spare parts dealership. Make your order below.
          </Text>
          <Flex display='grid' gridTemplateColumns='170px 170px' gridGap='8px' marginTop='16px'>
            <Button padding='24px' bgColor='inherit' border='1px solid' borderColor='yellow.200' color='#fff' fontWeight='300'>Spare Parts</Button>
            <Button padding='24px' bgColor='inherit' border='1px solid' borderColor='yellow.200' color='#fff' fontWeight='300'>Buy Bike</Button>
          </Flex>
          <Text color='#fff' margin='24px'>&copy; Vehicly {year}</Text>
        </Flex>
      </Center>
    </Box>
  );
}