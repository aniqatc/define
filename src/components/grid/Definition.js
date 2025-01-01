import BaseCard from './BaseCard';

function Definition({ partOfSpeech, definition, example, isDefaultExample }) {
    return (
        <BaseCard className="px-3 py-3 max-h-full w-full flex flex-col gap-1">
            <p className="font-bold italic">({partOfSpeech})</p>
            <p className="font-light mb-12">{definition}</p>
            <p className={`mt-auto text-sm italic ${isDefaultExample
                ? 'text-slate-500'
                : 'text-slate-700'
            }`}>{example}</p>
        </BaseCard>
    )
}

export default Definition;