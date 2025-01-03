import { motion } from 'framer-motion';

import Letter from './Letter';
import Word from './Word';
import Definitions from './Definitions';
import Related from './Related';
import Gallery from './Gallery';

function Grid({ data, images, onSearch }) {
  if (!data) return null;

  const synonyms = data.meanings.flatMap((meaning) => meaning.synonyms || []);
  const antonyms = data.meanings.flatMap((meaning) => meaning.antonyms || []);

  return (
    <main className="mt-1 w-full flex flex-col gap-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-2"
      >
        <Letter word={data.word} />
        <Word data={data} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-2 flex-wrap xs:flex-nowrap"
      >
        <Definitions data={data} />
      </motion.div>

      {antonyms.length > 0 || synonyms.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`flex flex-wrap sm:flex-nowrap gap-2 ${synonyms.length <= 3 || antonyms.length <= 3 ? 'flex-row' : 'flex-col'}`}
        >
          <Related antonyms={antonyms} synonyms={synonyms} onSuggest={onSearch} />
        </motion.div>
      ) : (
        ''
      )}

      {images.total_results > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Gallery content={images} />
        </motion.div>
      )}
    </main>
  );
}

export default Grid;
