import * as Select from "@radix-ui/react-select";

const themes = [
    {
        value: 'light',
        icon: <div className="w-4 h-4 rounded-full bg-white border border-gray-200" />
    },
    {
        value: 'dark',
        icon: <div className="w-4 h-4 rounded-full bg-gray-900 border border-gray-700" />
    },
    {
        value: 'sepia',
        icon: <div className="w-4 h-4 rounded-full bg-amber-50 border border-amber-200" />
    },
    {
        value: 'ocean',
        icon: <div className="w-4 h-4 rounded-full bg-blue-900 border border-blue-700" />
    }
];

function ThemeOptions() {
    return (
        <Select.Root defaultValue="light">
            <Select.Trigger
                className="inline-flex items-center justify-between rounded-md px-3 py-1 gap-2 h-7
                bg-white
                border border-gray-200
                hover:bg-gray-50"
            >
                {themes.find(theme => theme.value === 'light').icon}
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    className="overflow-hidden bg-white
                    rounded-md shadow-lg
                    border border-gray-200"
                    position="popper"
                >
                    <Select.Viewport>
                        <Select.Group>
                            {themes.map((theme) => (
                                <Select.Item
                                    key={theme.value}
                                    value={theme.value}
                                    className="relative flex items-center px-3 py-2 text-sm
                                    hover:bg-gray-100
                                    cursor-default"
                                >
                                    {theme.icon}
                                </Select.Item>
                            ))}
                        </Select.Group>
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}

export default ThemeOptions;