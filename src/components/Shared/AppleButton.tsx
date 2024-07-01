import { Button, ButtonProps } from '@mantine/core';
import { TwitterIcon } from '@mantinex/dev-icons';

function AppleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='xMidYMid'
            viewBox='0 0 256 262'
            style={{ width: '0.9rem', height: '0.9rem' }}
            {...props}
        >
            <path
                fill='#000000'
                d='M206.3 54.7c-8.3-10-21.6-16.4-34.4-16.1-15.4.2-29.8 8.7-37.8 8.7-8 0-21.5-8.5-35.5-8.2-18.3.3-35 10.7-44.4 27.1-18.9 32.4-4.8 80.2 13.5 106.3 9 13.1 19.8 27.9 34 27.4 13.6-.5 18.7-8.8 34.9-8.8 16.2 0 21.1 8.8 35.5 8.6 14.5-.2 23.6-13.2 32.5-26.2 8.8-12.7 12.4-25.1 12.6-25.8-.3-.2-25.6-9.7-25.9-38.2-.3-23.7 19.5-34.9 20.3-35.3-.3-.3-17.7-25-44.2-25.3zm-58.1-33.8c7.4-8.9 12.4-21.3 11-33.8-10.7.4-23.6 7.2-31.1 16.1-6.7 7.6-12.5 19.9-11 31.6 11.6.9 23.6-5.9 31.1-13.9z'
            />
        </svg>
    );
}

export function AppleButton(
    props: ButtonProps & React.ComponentPropsWithoutRef<'button'>
) {
    return <Button leftSection={<AppleIcon />} variant='default' {...props} />;
}
