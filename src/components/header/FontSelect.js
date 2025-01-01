import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { useContext } from "react";
import { FontContext } from "../../context/FontContext";

const fonts = [
    { value: 'sans', label: 'Sans' },
    { value: 'serif', label: 'Serif' },
    { value: 'mono', label: 'Mono' }
];

function FontSelect() {
    const { font, setFont } = useContext(FontContext);

    return (
        <Select.Root value={font} onValueChange={setFont}>
            <Select.Trigger
                className="inline-flex items-center justify-between rounded-md px-3 py-1 text-sm gap-2 h-8
                shadow-sm bg-white
                dark:bg-neutral-900
                dark:text-neutral-100
                border border-gray-200
                hover:bg-gray-50
                dark:hover:bg-gray-700 dark:border-neutral-700"
            >
                <Select.Value>
                    {fonts.find(f => f.value === font)?.label}
                </Select.Value>
                <Select.Icon>
                    <ChevronDown strokeWidth={1.6} size={18} />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    className="overflow-hidden bg-white
                    dark:bg-neutral-900
                    dark:text-neutral-100
                    rounded-md shadow-lg
                    border border-gray-200 dark:border-neutral-700"
                >
                    <Select.Viewport>
                        <Select.Group>
                            {fonts.map((font) => (
                                <Select.Item
                                    key={font.value}
                                    value={font.value}
                                    className={`
                                        relative flex items-center pl-7 py-1 text-sm 
                                        hover:bg-gray-100
                                        cursor-pointer font-${font.value}
                                        data-[highlighted]:bg-gray-100
                                        data-[state=checked]:bg-gray-200
                                        dark:data-[highlighted]:bg-gray-700
                                        dark:data-[state=checked]:bg-gray-800
                                    `}
                                >
                                    <Select.ItemText>
                                        <span className={`font-${font.value}`}>{font.label}</span>
                                    </Select.ItemText>
                                    <Select.ItemIndicator
                                        className="absolute left-2 inline-flex items-center"
                                    >
                                        <Check strokeWidth={1.6} size={16}/>
                                    </Select.ItemIndicator>
                                </Select.Item>
                            ))}
                        </Select.Group>
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}

export default FontSelect;