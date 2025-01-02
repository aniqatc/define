import BaseCard from './BaseCard';
import WordList from './WordList';

function Related({ synonyms, antonyms, onSuggest }) {
  return (
    <>
      {synonyms.length > 0 && (
        <BaseCard className="grow px-3 py-3 flex gap-2 items-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 forest:text-gray-400 font-semibold">
            Synonyms:{' '}
          </p>
          <WordList words={synonyms} onSuggest={onSuggest} />
        </BaseCard>
      )}
      {antonyms.length > 0 && (
        <BaseCard className="grow px-3 py-3 flex gap-2 items-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 forest:text-gray-400 font-semibold">
            Antonyms:{' '}
          </p>
          <WordList words={antonyms} onSuggest={onSuggest} />
        </BaseCard>
      )}
    </>
  );
}

export default Related;
