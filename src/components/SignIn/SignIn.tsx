'use client';

import { useToggle, upperFirst } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { useForm } from '@mantine/form';
import {
    Container,
    InputBase,
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Anchor,
    Stack,
    Space,
} from '@mantine/core';
import { IMaskInput } from 'react-imask';
import { GoogleButton } from '../Shared/GoogleButton';
import { AppleButton } from '../Shared/AppleButton';
import { GuestButton } from '../Shared/GuestButton';
import { useState } from 'react';

const SignIn = (props: PaperProps) => {
    const [type, toggle] = useToggle(['Sign In', 'Sign Up']);
    const router = useRouter();
    const [phoneNo, setPhoneNo] = useState<string | number>('');
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            nameoremail: '',
            fullname: '',
            lastname: '',
            phoneNo: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) =>
                val.length <= 6
                    ? 'Password should include at least 6 characters'
                    : null,
        },
    });

    return (
        <Container size="xs" my={40}>
            <Paper withBorder shadow="md" p={30} radius="md" mt="xl" {...props}>
                <Text size='xl' fw={700} mb={10}>
                    {type === 'Sign Up' ? "Register your account!": "Welcome Back!"}
                </Text>
                <Text size='sm'>{type === 'register' ? "Please input your form register.": "Please sign in with your account."}</Text>
                <Space h='xl' />
                <form onSubmit={form.onSubmit(() => {})}>
                    <Stack>
                        {type === 'Sign Up' && 
                            <div>
                                <TextInput
                                    label='Full Name'
                                    radius="xl"
                                    placeholder='Full name'
                                    value={form.values.fullname}
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            'fullname',
                                            event.currentTarget.value
                                        )
                                    }
                                    mb="xs"
                                />
                                <TextInput
                                    label='Last Name'
                                    placeholder='Last name'
                                    radius="xl"
                                    value={form.values.lastname}
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            'lastname',
                                            event.currentTarget.value
                                        )
                                    }
                                    mb="xs"
                                />
                                <TextInput
                                    label='Email Address'
                                    placeholder='hello@mantine.dev'
                                    value={form.values.email}
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            'email',
                                            event.currentTarget.value
                                        )
                                    }
                                    radius='xl'
                                    mb="xs"
                                />
                                <InputBase
                                    label="Phone No"
                                    radius="xl"
                                    component={IMaskInput}
                                    mask="+7 (000) 000-0000"
                                    placeholder="Phone Number"
                                    mb={1}
                                />                          
                            </div>
                        }

                        {type==='Sign In' && 
                            <TextInput
                                required
                                label='Username or Email'
                                placeholder='hello@mantine.dev'
                                value={form.values.email}
                                onChange={(event) =>
                                    form.setFieldValue(
                                        'email',
                                        event.currentTarget.value
                                    )
                                }
                                error={form.errors.email && 'Invalid email'}
                                radius='xl'
                            />
                        }
                        <PasswordInput
                            required
                            label='Password'
                            placeholder='Your password'
                            value={form.values.password}
                            onChange={(event) =>
                                form.setFieldValue(
                                    'password',
                                    event.currentTarget.value
                                )
                            }
                            error={
                                form.errors.password &&
                                'Password should include at least 6 characters'
                            }
                            radius='xl'
                        />

                        {type === 'Sign Up' && 
                            <Text size="xs" mb="xs">*Note : With sign up, you agree to the Terms & Conditions and Privacy Policy.</Text>
                        }
                    </Stack>
                    {type === 'Sign In' && 
                        <Group justify='flex-end' mt='sm' mb="lg">
                            <Anchor component='button' size='sm' c="#1BAC4B" fw={500}>
                                Forgot password?
                            </Anchor>
                        </Group>
                    }
                </form>

                <Button fullWidth color="#1BAC4B" type='submit' radius='xl' onClick={() => router.push('/Dashboard')}>
                    {upperFirst(type)}
                </Button>
                {type==='Sign In' && 
                    <div>
                        <Divider label='Or' labelPosition='center' my='lg' />
                        <Stack mb='md' mt='md'>
                            <GoogleButton radius='xl'>Sign in with Google</GoogleButton>
                            <AppleButton radius='xl'>Sign in with Apple</AppleButton>
                            <GuestButton radius='xl'>Continue as Guest</GuestButton>
                        </Stack>
                    </div>
                    
                }
                <Group justify='center' mt='xl'>
                    <text fontSize="sm">{type === 'Sign Up' ? "Already have an account?" : "Don't have an account?"}</text>
                    <Anchor
                        component='button'
                        type='button'
                        c="#1BAC4B"
                        fw={600}
                        onClick={() => toggle()}
                        size='md'
                    >
                        {type === 'Sign Up'
                            ? 'Sign In'
                            : "Register"}
                    </Anchor>
                    
                </Group>
            </Paper>
        </Container>
    );
};

export default SignIn;

