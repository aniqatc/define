import BaseCard from './BaseCard';
import WordList from './WordList';

function Related({ synonyms, antonyms }) {
    const words = ["whimsical", "sunset", "jubilant", "maelstrom", "serendipidity", "flower"];

    return (
        <>
        {synonyms &&
            <BaseCard className="px-3 py-3 flex gap-2 items-center">
                <p className="text-sm text-slate-500 font-semibold">Synonyms: </p>
                <WordList words={words} />

            </BaseCard>}
            {antonyms &&
                <BaseCard className="px-3 py-3 flex gap-2 items-center">
                <p className="text-sm text-slate-500 font-semibold">Antonyms: </p>
                <WordList words={words} />
            </BaseCard>}
        </>
    )
}

export default Related;