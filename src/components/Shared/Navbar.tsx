import {
  Image,
  HStack,
  Text,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Link,
  Flex,
} from '@chakra-ui/react';
import logo from '../../assets/Logo.jpg';
import { HamburgerIcon } from '@chakra-ui/icons';
import Linker from 'next/link';
import { useRouter } from 'next/navigation';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact us',
    link: '/contact',
  },
  {
    name: 'Locations',
    link: '/locations',
  },
  // {
  //   name: "Testimonies",
  //   link: "/testimonies",
  // },
];

function SmallScreenMenuDrawer({ isOpen, onClose }: DrawerProps) {
  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton boxShadow='none' mt='15px' />
          <DrawerBody
            px='40px'
            mt='20px'
            style={{
              flexDirection: 'column',
              display: 'flex',
            }}>
            {links.map((link) => (
              <Link as={Linker} href={link.link} key={link.name} mb='15px'>
                {link.name}
              </Link>
            ))}

            {/* <Link to="/testimonies">Testiomonies</Link> */}
            {/* <Link as={Linker} to="/practice">
              Practice
            </Link> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
const Navbar = () => {
  const navigate = useRouter();
  const {
    isOpen: isSmallScreenMenuOpen,
    onOpen: onSmallScreenMenuOpen,
    onClose: onSmallScreenMenuClose,
  } = useDisclosure();

  return (
    <>
      <HStack className='parent'>
        <Flex
          maxW='1440px'
          w='100%'
          justifyContent='space-between'
          alignItems='center'
          px={{
            base: '16px',
            xl: '40px',
          }}>
          <Flex
            alignItems='center'
            cursor='pointer'
            onClick={() => navigate.push('/')}>
            <Image w='105px' h='75px' src={logo.src} alt='logo' />
            <Text fontWeight='bold'>FoodTruc Network</Text>
          </Flex>
          {/* Build a drawer menu with icon */}
          <Box display={{ base: 'flex', xl: 'none' }}>
            <HamburgerIcon
              boxSize='24px'
              // ref={menuRef.current}
              onClick={onSmallScreenMenuOpen}
              // sx={{
              //   zIndex: 10000,
              // }}
            />
          </Box>
          <Box
            display={{ base: 'none', xl: 'flex' }}
            className='navbar'
            px='24px'>
            {links.map((link) => (
              <Flex width='100px' justifyContent='center' key={link.name}>
                <Link
                  as={Linker}
                  href={link.link}
                  style={{ textDecoration: 'none' }}
                  _hover={{
                    transition: 'all 0.3s ease-in-out',
                    fontWeight: 'bold',
                  }}>
                  {link.name}
                </Link>
              </Flex>
            ))}

            {/* <Link to="/qr">Qr</Link> */}
          </Box>
        </Flex>
        <SmallScreenMenuDrawer
          isOpen={isSmallScreenMenuOpen}
          onClose={onSmallScreenMenuClose}
        />
      </HStack>
    </>
  );
};

export default Navbar;
