import { Link as RouteLink } from "react-router-dom";
import {  BiArrowBack as BackArrow } from 'react-icons/bi';
import { Flex, Center, Heading, Text, Link, SimpleGrid, Image } from "@chakra-ui/react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


import bikes, { Bike } from 'App/Data/bikes';

export default function BikesPage(){
  return (
    <Center zIndex='10' w='100%' h='100%' padding='24px'>
      <Flex direction='column' alignItems='center' justifyContent='center' >
        <Heading 
          zIndex='10'
          size='2xl'
          color='yellow.200'
          marginBottom='24px'
          fontFamily="'Rubik Vinyl', cursive"
        >
          <Flex alignItems='center'>
            <Link 
              as={RouteLink}
              to="/"
              title="Go Home"
              marginRight='24px'
              fontSize='32px'
              bgColor='inherit'
              transition="all .3s ease"
              color='#fff' fontWeight='300'
              _hover={{  color: '#fff', fontSize: '48px'}}
            >
              <BackArrow />
            </Link>
              Bikes On Sale
          </Flex>
        </Heading>
        <SimpleGrid gap={16} w='80%' columns={[1, 2, 3]} marginTop='24px'>
          {
            bikes.map((bike: Bike) => (
              <SimpleGrid placeItems='center' gap={3} key={bike.id}>
                <Text
                  zIndex='10'
                  color="yellow.200"                  
                  fontSize='2xl'
                  fontFamily='Alegreya SC'
                  textAlign='center'
                  style={{fontWeight: '900!important'}}
                >
                  {bike.make} {bike.model}
                </Text>
                <Swiper 
                  slidesPerView={'auto'}
                  spaceBetween={30}
                  pagination={{
                    type: 'fraction',
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {
                    bike.images?.map((imageURL: string, i) => {
                      const reactKey = `$bike-${bike.id}-image-${i}}`;
                      return (
                        <SwiperSlide key={reactKey}>
                          <Image src={imageURL} />
                        </SwiperSlide>
                      );
                    })
                  }
                </Swiper>
                <Text
                  zIndex='10'
                  color="white"  
                  fontSize='sm'
                  display='flex'
                  w='100%'
                >
                  <Text 
                    as='span' 
                    color="yellow.200"
                    fontFamily="Montserrat" 
                  >
                      ENGINE CAPACITY:
                  </Text>
                  <Text as='span' marginLeft={2}>
                    {bike.engineCapacity}
                  </Text>
                </Text>
                <Text
                  zIndex='10'
                  color="white"  
                  fontSize='sm'
                  display='flex'
                  w='100%'
                >
                  <Text 
                    as='span' 
                    color="yellow.200"
                    fontFamily="Montserrat" 
                  >
                      EXTRA LIGHTS INCLUDED:
                  </Text>
                  <Text 
                    as='span'
                    marginLeft={2}
                  >
                    {bike.extraLightsIncluded}
                  </Text>
                </Text>
                <Text
                  zIndex='10'
                  color="white"  
                  fontSize='lg'
                  display='flex'
                  w='100%'
                >
                  <Text
                    as='span' 
                    color="yellow.200"
                    fontFamily="Montserrat" 
                  >
                      PRICE:
                  </Text>
                  <Text
                    as='span'
                    marginLeft={2}
                  >
                    {bike.price}
                  </Text>
                </Text>
              </SimpleGrid>
            ))
          }
        </SimpleGrid>
      </Flex>
    </Center>
  );
}