import { Flex, Center, Text, SimpleGrid, Image } from "@chakra-ui/react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import accessories, { Accessory } from "App/Data/accessories";
import ProductHeader from "App/Component/ProductHeader";

export default function AccessoriesPage(){
  return (
    <Center zIndex='10' w='100%' h='100%' padding='24px 8px'>
      <Flex direction='column' justifyContent='center' >
        <ProductHeader title="Accessories" />
        {
          accessories.length
            ? (
              <SimpleGrid gap={[4]} columns={[1, 2, 3, 4]}>
                {
                  accessories.map((accessory: Accessory) => (
                    <SimpleGrid 
                      placeItems='center' 
                      gap={3} 
                      padding='8px 0'
                      borderRadius={5}
                      backgroundColor='#212121'
                      key={accessory.id}
                    >
                      <Text
                        zIndex='10'
                        color="yellow.200"                  
                        fontSize='2xl'
                        fontFamily='Alegreya SC'
                        textAlign='center'
                        style={{fontWeight: '900!important'}}
                      >
                        {`${accessory.make ? accessory.make + ' ' : ''}`}{accessory.name}
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
                          accessory.images?.map((imageURL: string, i) => {
                            const reactKey = `accessory-${accessory.id}-image-${i}}`;
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
                            {accessory.type}
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
                            {accessory.price}
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