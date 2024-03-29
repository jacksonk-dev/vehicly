import { Flex, Center, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


import bikes, { Bike } from 'App/Data/bikes';
import ProductHeader from "App/Component/ProductHeader";

export default function BikesPage(){
  return (
    <Center zIndex='10' w='100%' h='100%' padding='24px 8px'>
      <Flex direction='column' justifyContent='center' >
        <ProductHeader title="Bikes" />
        <SimpleGrid gap={[4]} columns={[1, 2, 3]}>
          {
            bikes.map((bike: Bike) => (
              <SimpleGrid 
                placeItems='center' 
                gap={3} 
                key={bike.id} 
                padding='8px 0'
                borderRadius={5}
                backgroundColor='#212121'
              >
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
                      ENGINE CAPACITY:
                    </Text>
                    <Text as='span' marginLeft={2}>
                      {bike.engineCapacity}
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
                      {bike.price}
                    </Text>
                  </Text>
                </SimpleGrid>
              </SimpleGrid>
            ))
          }
        </SimpleGrid>
      </Flex>
    </Center>
  );
}