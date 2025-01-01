import Letter from './Letter';
import Word from './Word';
import Definition from './Definition';
import Related from './Related';
import Gallery from './Gallery';

function Grid({ data }) {
    if (!data) return null;

    const definitions = data.meanings.flatMap(meaning =>
        meaning.definitions.map(def => ({
            partOfSpeech: meaning.partOfSpeech,
            definition: def.definition,
            example: def.example
                ? `"${def.example}"`
                : `I couldn't find an example for the word, "${data.word}", as a ${meaning.partOfSpeech}.`
        })).slice(0, 3)
    );

    const completeDefs = definitions.filter(def => def.partOfSpeech && def.definition && def.example).slice(0, 3);
    const defsToRender = completeDefs.length > 0 ? completeDefs : definitions;
    const synonyms = data.meanings.flatMap(meaning => meaning.synonyms || []);
    const antonyms = data.meanings.flatMap(meaning => meaning.antonyms || []);

    return (
        <div className="mt-3 w-full flex flex-col gap-2">
            <div className="flex gap-2">
                <Letter word={data.word} />
                <Word data={data} />
            </div>
            <div className="flex gap-2 flex-wrap xs:flex-nowrap">
                {defsToRender.map((def, index) => (
                    <Definition
                        key={index}
                        definition={def.definition}
                        partOfSpeech={def.partOfSpeech}
                        example={def.example}
                    />
                ))}
                {!defsToRender.length && (
                    <p className="text-sm text-slate-700">No definitions available for this word.</p>
                )}
            </div>
            <Related antonyms={antonyms} synonyms={synonyms} />
            <Gallery />
        </div>
    )
}

export default Grid;