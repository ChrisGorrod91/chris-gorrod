import type { Meta, StoryObj } from '@storybook/react';
import Availability from './availability';

const meta: Meta<typeof Availability> = {
    title: 'Components/Availability',
    component: Availability,
    argTypes: {
        heading: { control: 'text' },
        text: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Availability>;

export const Default: Story = {
    args: {
        heading: 'Current availability',
        text: "Currently unavailble",
    },
};

export const Custom: Story = {
    args: {
        heading: 'Custom heading',
        text: 'Custom availability message',
    },
};
