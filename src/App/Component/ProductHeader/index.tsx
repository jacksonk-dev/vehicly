import { Link as RouteLink } from "react-router-dom";
import { Flex, Heading, Link } from "@chakra-ui/react";
import {  BiArrowBack as BackArrow } from 'react-icons/bi';

export default function ProductHeader({ title }: { title: string }){
  return (
    <Heading 
      zIndex='10'
      size='2xl'
      color='yellow.200'
      marginBottom='24px'
      fontFamily="Alegreya SC"
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
        {title}
      </Flex>
    </Heading>
  );
}