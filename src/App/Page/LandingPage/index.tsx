import { Flex, Center, Heading, Text, Box, Image, Button, ScaleFade } from "@chakra-ui/react";

export default function LandingPage(){
  const year = new Date().getFullYear();

  return (
    <Box h='100vh' w='100vw' bgGradient='linear(to-r, #000, red.400)'>
      <Center zIndex='10' w='100%' h='100%' background='inherit' padding='24px'>
        <Flex direction='column' alignItems='center' >
          <ScaleFade initialScale={0} in>
            <Image src='src/Assets/Images/bg.png' w='800px' h='auto' position='relative' top='-80px' />
          </ScaleFade>
          <Heading 
            zIndex='10'
            size='4xl'
            w='100%'
            color='yellow.200'
            marginBottom='24px'
            fontFamily="'Rubik Vinyl', cursive"
            textAlign='center'
            position='relative' top='-100px'
          >Vehicly</Heading>
          <Text
            zIndex='10'
            color="white" 
            fontFamily="'Nixie One', bold" 
            fontWeight='extrabold' 
            fontSize='3xl'
            textAlign='center'
            position='relative' top='-100px'
          >
            Vehicle and spare parts dealership, repair, training and cleaning services. Make booking below.
          </Text>
          <Flex marginTop='24px' display='grid' gridTemplateColumns='170px 170px' gridGap='8px' position='relative' top='-100px'>
            <Flex display='grid' gridTemplateColumns='170px' gridGap='8px'>
              <Button padding='24px'>Cleaning</Button>
              <Button padding='24px'>Repair</Button>
              <Button padding='24px'>Stuck On Road</Button>
            </Flex>
            <Flex display='grid' gridTemplateColumns='170px' gridGap='8px'>
              <Button padding='24px'>Spare Parts</Button>
              <Button padding='24px'>Buy Bike</Button>
              <Button padding='24px'>Book Training</Button>
            </Flex>
          </Flex>
          <Text color='#fff' position='fixed' bottom='16px'>&copy; Vehicly {year}</Text>
        </Flex>
      </Center>
    </Box>
  );
}