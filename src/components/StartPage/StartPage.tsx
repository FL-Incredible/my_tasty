'use client'

import { Image, Title, Button, Group, Text } from '@mantine/core';
import classes from './StartPage.module.css';
import { useRouter } from 'next/navigation';
import { open_Sans, urbanist } from '@/app/ui/fonts';

export default function StartPage() {
    const router = useRouter();

    return (
        <div className={classes.root}>
            <div className={classes.left}>
                
                <div className={classes.logo}>
                    <Image src="/Vector.png" alt="My image" w="auto" fit="contain"/>
                </div>
                <Title className={`${open_Sans.className} ${classes.title1}`}>
                    Tasty Eats
                </Title>
            </div>
            <div className={classes.image}>
                <div className={classes.content}>
                    
                    <Title className={`${urbanist.className} ${classes.title}`}>
                        Preorder your food so save time
                    </Title>
                    <Text c="white" mt="lg" className={`${urbanist.className}`}>
                        Feel the warmth and togetherness with your family at your favorite restaurant
                    </Text>

                    <Group justify='center' mt={40}>
                        <Button radius="xl" color="#1BAC4B" size="md">
                            <Text fw={700} className={`${urbanist.className}`}>Get started</Text>
                        </Button>
                        <Button variant="default" radius="xl" size="md" onClick={() => router.push('/login')}>
                            <Text fw={700} className={`${urbanist.className}`} c="#1BAC4B">Sign in</Text>
                        </Button>
                    </Group>
                </div>
            </div>
        </div>
    );
}
