import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Grid } from './components/grid';
import Header from './components/header/Header';
import SearchContainer from './components/search/SearchContainer';
import Footer from './components/footer/Footer';
import ErrorCard from './components/error/ErrorCard';

import { fetchWordData, fetchImages } from './data/api';

function App() {
  const [word, setWord] = useState(() => {
    return localStorage.getItem('word') || 'hello';
  });
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  function handleSearch(userInput) {
    if (userInput !== word) {
      setWord(userInput);
      localStorage.setItem('word', userInput);

      // Reset states after a new search
      setData(null);
      setImages([]);
      setError(null);
    }
  }

  useEffect(() => {
    if (!word) return;
    fetchWordData(word)
      .then((data) => {
        if (!data || !data.meanings || data.meanings.length === 0) {
          const error = new Error(`No definition found for the word: "${word}"`);
          error.code = 'NO_DEFINITION';
          throw error;
        }

        setData(data);
        localStorage.setItem('word', word);
        return fetchImages(word);
      })
      .then((images) => {
        setImages(images);
      })
      .catch((error) => {
        setError({
          code: error.code || 'UNEXPECTED_ERROR',
          message: error.message || 'An unexpected error has occurred.',
        });
      });
  }, [word]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen w-full px-5 my-3 flex flex-col
             items-center max-w-screen-md mx-auto
            transition-colors duration-200 sm:py-8`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full"
        >
          <Header />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full"
        >
          <SearchContainer onSearch={handleSearch} />
        </motion.div>

        {error ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="w-full"
            >
              <ErrorCard error={error} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="w-full"
            >
              <Footer source={data?.sourceUrls} />
            </motion.div>
          </>
        ) : (
          word &&
          data && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="w-full"
              >
                <Grid data={data} images={images} onSearch={handleSearch} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="w-full"
              >
                <Footer source={data?.sourceUrls} />
              </motion.div>
            </>
          )
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
