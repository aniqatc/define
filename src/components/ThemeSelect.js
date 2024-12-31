import * as Select from "@radix-ui/react-select";

const themes = [
    {
        value: 'light',
        icon: <div className="w-4 h-4 rounded-full bg-white border border-gray-200" />
    },
    {
        value: 'dark',
        icon: <div className="w-4 h-4 rounded-full bg-gray-600 border border-gray-900" />
    },
    {
        value: 'sepia',
        icon: <div className="w-4 h-4 rounded-full bg-pink-50 border border-pink-200" />
    },
    {
        value: 'ocean',
        icon: <div className="w-4 h-4 rounded-full bg-blue-300 border border-blue-700" />
    }
];

function ThemeSelect() {
    return (
        <Select.Root defaultValue="light">
            <Select.Trigger
                className="inline-flex items-center justify-between rounded-md px-3 py-1 gap-2 h-8
                bg-white
                border border-gray-200
                hover:bg-gray-50"
            >
                <Select.Value />
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    className="overflow-hidden bg-white
                    rounded-md shadow-lg
                    border border-gray-200"
                >
                    <Select.Viewport>
                        <Select.Group>
                            {themes.map((theme) => (
                                <Select.Item
                                    key={theme.value}
                                    value={theme.value}
                                    className="relative flex items-center px-3 py-2 text-sm
                                    hover:bg-gray-100
                                    cursor-default
                                    data-[highlighted]:bg-gray-100
                                    data-[state=checked]:bg-gray-200"
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