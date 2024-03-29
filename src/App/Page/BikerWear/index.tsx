import { Flex, Center, Text, SimpleGrid, Image } from "@chakra-ui/react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import bikerWears, { BikerWear } from "App/Data/bikerWear";
import ProductHeader from "App/Component/ProductHeader";

export default function BikerWearPage(){
  return (
    <Center zIndex='10' w='100%' h='100%' padding='24px 8px'>
      <Flex direction='column' justifyContent='center' >
        <ProductHeader title="Biker Wear" />
        {
          bikerWears.length
            ? (
              <SimpleGrid gap={[4]} columns={[1, 2, 3, 4]}>
                {
                  bikerWears.map((bikerWear: BikerWear) => (
                    <SimpleGrid
                      placeItems='center' 
                      gap={3} 
                      padding='8px 0'
                      borderRadius={5}
                      backgroundColor='#212121'
                      key={bikerWear.id}
                    >
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
                      <SimpleGrid gap={2} w='100%' padding={2}>
                        <Text
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
                          TYPE:
                          </Text>
                          <Text as='span' marginLeft={2}>
                            {bikerWear.type}
                          </Text>
                        </Text>
                        <Text
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