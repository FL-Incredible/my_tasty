'use client';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import google from '@/assets/googleplay.1abee743.svg';
import apple from '@/assets/appstore.d93181fe.svg';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import './HomePage.css';
import { motion } from 'framer-motion';
import { BsPinMap } from 'react-icons/bs';
import { IoBriefcaseOutline, IoPhonePortraitOutline } from 'react-icons/io5';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <div className='heroimage shadow-md'></div>
      </motion.div>
      <Flex bg='#f5f5ff' flexDir='column'>
        <Flex
          className='body1'
          maxW='1440px'
          w='100%'
          mx='auto'
          justifyContent='space-between'
          alignItems='center'
          px={{
            base: '16px',
            xl: '40px',
          }}
          py='60px'
          flexDir={{
            base: 'column',
            xl: 'row',
          }}>
          <Flex
            flexDir='column'
            alignItems='center'
            className='body2'
            w={{
              base: '100%',
              xl: '55%',
            }}
            mb={{
              base: '20px',
              xl: 0,
            }}>
            <Text
              fontFamily='Roboto'
              fontSize={{
                base: '24px',
                md: '40px',
              }}
              fontWeight='bold'>
              Welcome to FoodTruc Network
            </Text>
            <Text
              fontFamily='Roboto'
              paddingTop='5px'
              fontSize={{
                base: '20px',
                md: '28px',
              }}>
              Location is the key to success!
            </Text>
            <Text
              fontFamily='Roboto'
              paddingTop='10px'
              fontSize={{
                base: '18px',
                xl: '24px',
              }}
              textAlign='center'>
              Welcome to the FoodTrucNewtork, the ultimate platform for food
              truck owners seeking prime locations and unparalleled business
              growth. Discover your perfect spot and accelerate your success
              today!
            </Text>
            <Box
              paddingTop={10}
              mb={{
                base: '20px',
                xl: 0,
              }}>
              <Text
                display={'flex'}
                flexDirection={'column'}
                alignContent={'center'}
                alignItems={'center'}
                fontFamily='Roboto'
                fontSize={{
                  base: '20px',
                  md: '28px',
                }}
                fontWeight='bold'>
                Download our apps on your playstore
              </Text>
              <Flex
                justifyContent='space-between'
                alignItems='center'
                flexDir={{
                  base: 'column',
                  md: 'row',
                }}
                mt='20px'>
                <Image
                  src={google.src}
                  alt='google'
                  width={{
                    base: '100%',
                    md: '200px',
                  }}
                  mb={{
                    base: '20px',
                    md: 0,
                  }}
                  onClick={() =>
                    window.open(
                      'https://play.google.com/store/apps?hl=en_US&gl=US&pli=1'
                    )
                  }
                />
                <Image
                  src={apple.src}
                  alt='apple'
                  width={{
                    base: '100%',
                    md: '200px',
                  }}
                  onClick={() =>
                    window.open('https://www.apple.com/app-store/')
                  }
                />
              </Flex>
            </Box>
          </Flex>
          <div className='body3'>
            <video width='500' height='500' controls>
              <source src='/videos/intro.mp4' type='video/mp4' />
            </video>
          </div>
        </Flex>
        <Flex className='section1'>
          <Flex
            flexDir={{
              base: 'column',
              xl: 'row',
            }}
            gap={{
              base: '1rem',
              xl: '2rem',
            }}
            justifyContent='space-between'
            alignItems='center'
            w='100%'
            py='80px'
            maxW='1440px'
            px={{
              base: '16px',
              xl: '40px',
            }}>
            <Flex
              flexDir='column'
              className='divider shadow-lg'
              alignItems='center'
              padding='30px'
              // boxSize={{
              //   base: "350px",
              //   md: "380px",
              // }}
              mb={{
                base: '30px',
                xl: 0,
              }}>
              <BsPinMap size={40} />
              <Text className='title' fontFamily='Roboto' fontSize='32px'>
                Space Booking
              </Text>
              <Text
                className='font'
                fontSize={{
                  base: '18px',
                  md: '20px',
                }}>
                <motion.span
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true, amount: 0.8 }}>
                  Unlock a world of prime locations with our easy-to-use space
                  booking service. Whether it&apos;s a bustling city corner for
                  a day or a long-term spot. We&apos;ve got you covered in a
                  high traffic location.
                </motion.span>
              </Text>
            </Flex>
            <Flex
              flexDir='column'
              className='divider'
              // boxSize={{
              //   base: "350px",
              //   md: "380px",
              // }}
              alignItems='center'
              padding='30px'
              mb={{
                base: '30px',
                xl: 0,
              }}>
              <IoBriefcaseOutline size={40} />
              <Box fontFamily='Roboto' className='title' fontSize='32px'>
                Business Promotion
              </Box>
              <Text
                className='font'
                fontSize={{
                  base: '18px',
                  md: '20px',
                }}>
                <motion.span
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true, amount: 0.8 }}>
                  Elevate your food truck business with our cutting-edge app.
                  Engage with customers like never before - from taking
                  preorders to sending out real-time updates and analyzing your
                  revenue, all in one place.
                </motion.span>
              </Text>
            </Flex>
            <Flex
              flexDir='column'
              className='divider'
              alignItems='center'
              padding='30px'
              // boxSize={{
              //   base: "350px",
              //   md: "380px",
              // }}
            >
              <IoPhonePortraitOutline size={40} />
              <Box className='title' fontFamily='Roboto' fontSize='32px'>
                Mobile App
              </Box>
              <Text
                className='font'
                fontSize={{
                  base: '18px',
                  md: '20px',
                }}>
                <motion.span
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true, amount: 0.8 }}>
                  Our app is more than just a tool; it&apos;s your
                  business&apos;s best friend. With features designed to enhance
                  customer interaction and streamline your operations, success
                  is just a tap away.
                </motion.span>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Homepage;
