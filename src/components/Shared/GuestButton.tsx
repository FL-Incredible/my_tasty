import { Button, ButtonProps } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';

export function GuestButton(
    props: ButtonProps & React.ComponentPropsWithoutRef<'button'>
) {
    return <Button leftSection={<IconUser />} variant='default' {...props} />;
}
