import BaseCard from './BaseCard';

function Definition() {
    return (
        <BaseCard className="px-3 py-3 min-h-60 max-h-full w-full flex flex-col gap-1">
            <p className="font-bold italic">(noun)</p>
            <p className="font-light mb-10">Lacking in intelligence or exhibiting the quality of having been done by someone lacking in intelligence.</p>
            <p className="mt-auto text-sm">"Neurobiology bores me stupid."</p>
        </BaseCard>
    )
}

export default Definition;