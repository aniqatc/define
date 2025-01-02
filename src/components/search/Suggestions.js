import { motion } from 'framer-motion';

function Suggestions({ onSuggest }) {
  return (
    <div className="mt-3 mx-1 flex gap-2 items-center">
      <p className="text-slate-400 text-xs shrink-0">Suggestions:</p>
      <motion.ul
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delayChildren: 0.1, staggerChildren: 0.2 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="text-gray-500 flex gap-2 text-sm"
      >
        {['book', 'flower', 'sunset', 'jubilant', 'love', 'joy', 'twilight'].map((word, index) => (
          <motion.li
            variants={{
              hidden: {
                opacity: 0,
                scaleX: 0.25,
                transformOrigin: 'left',
              },
              visible: {
                opacity: 1,
                scaleX: 1,
                transformOrigin: 'left',
                transition: {
                  type: 'spring',
                  stiffness: 200,
                  damping: 25, // slight bounce
                  duration: 0.35,
                },
              },
            }}
            key={index}
            className={`
                                ${index >= 3 ? 'hidden' : ''}          
                                ${index === 3 ? 'xs:block' : ''} 
                                ${index === 4 ? 'xs:block' : ''}      
                                ${index === 5 ? 'sm:block' : ''}      
                                ${index === 6 ? 'md:block' : ''}
                           `}
          >
            <button
              onClick={() => onSuggest(word)}
              className="dark:bg-neutral-800
                                    px-2 rounded-full
                                    hover:bg-neutral-400
                                    ocean:bg-blue-200
                                    ocean:text-sky-900
                                    ocean:hover:bg-blue-300
                                    dark:hover:bg-neutral-700
                                    dark:text-neutral-300
                                    bg-gray-300 px-2 rounded-full
                                    hover:bg-gray-600 hover:text-gray-200
                                    transition-all
                                    forest:bg-emerald-950
                                    forest:text-emerald-600
                                    forest:hover:text-green-400
                                    forest:hover:bg-emerald-900"
            >
              {word}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Suggestions;
