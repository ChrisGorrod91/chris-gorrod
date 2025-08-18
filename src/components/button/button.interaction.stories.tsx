import { userEvent, within } from '@storybook/testing-library';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Clickable: Story = {
    args: {
        text: 'Click me',
        type: "button"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = await canvas.getByRole('button', { name: /click me/i });
        await userEvent.click(button);
        // You can add assertions here if using @storybook/test-runner
    },
};
