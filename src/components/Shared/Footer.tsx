import { Flex, Image } from '@chakra-ui/react';
import google from '../../assets/googleplay.1abee743.svg';
import apple from '../../assets/appstore.d93181fe.svg';
import { TbFishChristianity } from 'react-icons/tb';

const Footer = () => {
  return (
    <Flex bg='#f5f5ff' justifyContent='center'>
      <Flex
        className='footer'
        w='100%'
        px={{
          base: '10px',
          md: '40px',
        }}
        flexDir={{
          base: 'column-reverse',
          md: 'row',
        }}
        alignItems={{
          base: 'center',
          xl: 'space-between',
        }}
        justifyContent={{
          base: 'center',
          md: 'space-between',
        }}
        maxW='1440px'>
        <div className='footerbox1'>
          <p>2023. All rights reserved</p>
          <TbFishChristianity size={24} />
        </div>
        <Flex
          mt={5}
          w={{
            base: '100%',
            md: '380px',
          }}
          gap={5}
          className='footerbox2'>
          <form action='https://play.google.com/store/apps?hl=en_US&gl=US&pli=1'>
            <button type='submit'>
              <Image src={google.src} alt='google' />
            </button>
          </form>
          <form action='https://www.apple.com/app-store/'>
            <button type='submit'>
              <Image src={apple.src} alt='apple' />
            </button>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
