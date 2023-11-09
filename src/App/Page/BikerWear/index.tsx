import { Link as RouteLink } from "react-router-dom";
import {  BiArrowBack as BackArrow } from 'react-icons/bi';
import { Flex, Center, Heading, Text, Link, SimpleGrid, Image } from "@chakra-ui/react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import bikerWears, { BikerWear } from "App/Data/bikerWear";

export default function BikerWearPage(){
  return (
    <Center zIndex='10' w='100%' h='100%' padding='24px 12px'>
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
              Biker Wear
          </Flex>
        </Heading>
        {
          bikerWears.length
            ? (
              <SimpleGrid gap={2} w='80%' columns={[1, 2, 3, 4]} marginTop='24px'>
                {
                  bikerWears.map((bikerWear: BikerWear) => (
                    <SimpleGrid placeItems='center' gap={3} key={bikerWear.id}>
                      <Text
                        zIndex='10'
                        color="yellow.200"                  
                        fontSize='2xl'
                        fontFamily='Alegreya SC'
                        textAlign='center'
                        style={{fontWeight: '900!important'}}
                      >
                        {`${bikerWear.make ? bikerWear.make + ' ' : ''}`}{bikerWear.name}
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
                          bikerWear.images?.map((imageURL: string, i) => {
                            const reactKey = `biker-wear-${bikerWear.id}-image-${i}}`;
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
                        Type:
                        </Text>
                        <Text as='span' marginLeft={2}>
                          {bikerWear.type}
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
                          {bikerWear.price}
                        </Text>
                      </Text>
                    </SimpleGrid>
                  ))
                }
              </SimpleGrid>
            ) : <Text color="#fff">No items at the moment. Stay tuned.</Text>
        }
      </Flex>
    </Center>
  );
}