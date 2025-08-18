import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        text: { control: 'text' },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
        },
        className: {
            control: 'select',
            options: ['', 'button--secondary'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        text: 'Get in touch',
        type: 'button',
        className: '',
    },
};

export const Secondary: Story = {
    args: {
        text: 'Get in touch',
        type: 'button',
        className: 'button--secondary',
    },
};
