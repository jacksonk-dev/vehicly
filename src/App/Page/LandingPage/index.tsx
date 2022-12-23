import { Flex, Center, Heading, Text, Box, Image } from "@chakra-ui/react";

export default function LandingPage(){
  return (
    <Box w='100%' h='200px' bgGradient='linear(to-r, #000, red.400)'>
      <Center zIndex='10' w='100vw' h='100vh' padding='5%' background='inherit'>
        <Flex direction='column' alignItems='center' w='600px' >
          <Heading 
            zIndex='10'
            size='4xl'
            w='100%'
            color='yellow.200'
            marginBottom='24px'
            fontFamily="'Rubik Vinyl', cursive"
          >Bikely</Heading>
          <Text
            zIndex='10'
            color="white" 
            fontFamily="'Nixie One', bold" 
            fontWeight='extrabold' 
            fontSize='3xl'
          >
              Know prices. Know great mechanics. Make life an enjoyable ride.
          </Text>
          <Image position="absolute" zIndex='9' src='src/Assets/Images/bg.png' w='800px' h='auto' />
        </Flex>
        <Center h='100%' w='50%' color='white' >
            Items
        </Center>
      </Center>
    </Box>
  );
}