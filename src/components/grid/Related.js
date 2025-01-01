import BaseCard from './BaseCard';
import WordList from './WordList';

function Related({ synonyms, antonyms }) {
    return (
        <>
        {synonyms.length > 0 &&
            <BaseCard className="px-3 py-3 flex gap-2 items-center">
                <p className="text-sm text-slate-500 font-semibold">Synonyms: </p>
                <WordList words={synonyms} />

            </BaseCard>}
            {antonyms.length > 0 &&
                <BaseCard className="px-3 py-3 flex gap-2 items-center">
                <p className="text-sm text-slate-500 font-semibold">Antonyms: </p>
                <WordList words={antonyms} />
            </BaseCard>}
        </>
    )
}

export default Related;