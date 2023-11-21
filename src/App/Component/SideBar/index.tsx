import { NavLink as RouteLink, useLocation } from "react-router-dom";
import { Flex, Link, Text } from "@chakra-ui/react";

import links from "App/Router/links";

const SideBar = () => {
  const { pathname } = useLocation();
  
  if(pathname === '/') return null;
  
  return (
    <Flex 
      direction='column' 
      w='fit-content'
      mr='16px'
      top='0' 
      height='100vh' 
      color='#000'
      backgroundColor='yellow.200'              
      borderRight='3px solid'
      minW={{ "md": '176px'}}
    >
      {
        links.map(({label, to, href, blank, Icon }, index) => {
          const reactKey = `side-link-${index}`;

          return (
            <Link 
              key={reactKey}
              as={to ? RouteLink : undefined}
              to={to as string}
              padding='16px 36px 16px 12px'
              bgColor='inherit'
              color='#000' 
              fontWeight='900'
              display='flex'
              alignItems='center'
              target={blank ? 'blank' : undefined}
              href={href}
              _hover={{ bgColor: '#000', color: 'yellow.200'}}
              _activeLink={{
                bgColor: '#000',
                color: 'yellow.200'
              }}
            >
              <Icon 
                fontSize={18} 
              />
              <Text ml={3}>
                {label}
              </Text>
            </Link>
          );
        })
      }
    </Flex>
  );
};

export default SideBar;