import * as Select from "@radix-ui/react-select";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const themes = [
    {
        value: 'light',
        icon: <div className="w-4 h-4 shadow-md rounded-full bg-slate-300 border border-slate-400" />
    },
    {
        value: 'dark',
        icon: <div className="w-4 h-4 shadow-md rounded-full bg-gray-600 border border-gray-900" />
    },
    {
        value: 'pink',
        icon: <div className="w-4 h-4 shadow-md rounded-full bg-pink-50 border border-pink-200" />
    },
    {
        value: 'ocean',
        icon: <div className="w-4 h-4 shadow-md rounded-full bg-blue-300 border border-blue-700" />
    },
    {
        value: 'forest',
        icon: <div className="w-4 h-4 shadow-md rounded-full bg-green-300 border border-green-700" />
    }
];

function ThemeSelect() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <Select.Root value={theme} onValueChange={setTheme}>
            <Select.Trigger
                className="inline-flex items-center justify-between rounded-md px-3 py-1 gap-2 h-8
                bg-white shadow-sm
                border border-gray-200 dark:bg-neutral-900
                dark:text-neutral-100
                hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-neutral-700"
            >
                <Select.Value />
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    className="overflow-hidden bg-white
                    rounded-md shadow-lg
                    border border-gray-200 dark:border-neutral-700 dark:bg-neutral-900
                    dark:text-neutral-100"
                >
                    <Select.Viewport>
                        <Select.Group>
                            {themes.map((theme) => (
                                <Select.Item
                                    key={theme.value}
                                    value={theme.value}
                                    className="relative flex items-center px-3 py-2 text-sm
                                    hover:bg-gray-100
                                    cursor-pointer
                                    data-[highlighted]:bg-gray-100
                                    data-[state=checked]:bg-gray-200
                                    dark:data-[highlighted]:bg-gray-700
                                    dark:data-[state=checked]:bg-gray-800"
                                >
                                    <Select.ItemText>
                                        {theme.icon}
                                    </Select.ItemText>
                                </Select.Item>
                            ))}
                        </Select.Group>
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}

export default ThemeSelect;