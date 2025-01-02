import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Header from './components/header/Header';
import SearchContainer from './components/search/SearchContainer';
import Grid from './components/grid/Grid';
import Footer from './components/footer/Footer';
import ErrorCard from './components/error/ErrorCard'

import { fetchWordData, fetchImages } from "./data/api";

function App() {
    const [word, setWord] = useState(localStorage.getItem('word') || "hello");
    const [data, setData] = useState(null);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    function handleSearch(userInput) {
        setWord(userInput);
        localStorage.setItem('word', userInput);

        // Reset states after a new search
        setData(null);
        setImages([]);
        setError(null);
    }

    useEffect(() => {
        if (!word) return;
        fetchWordData(word).then((data) => {
            if (!data || !data.meanings || data.meanings.length === 0) {
                throw new Error(`No definition found for the word: "${word}"`);
            }
            setData(data);
            localStorage.setItem('word', word);
            return fetchImages(word);
        }).then((images) => {
            setImages(images);
        }).catch((error) => {
            setError(error || "An unexpected error occurred.");
        });
    }, [word]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen w-full p-4 flex flex-col justify-center
             ditems-center max-w-screen-md mx-auto
            transition-colors duration-200"
        >
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

            {error && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full mt-2"
                >
                    <ErrorCard error={error} />
                </motion.div>
            )}

            {word && !error && data && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                    className="w-full"
                >
                    <Grid data={data} images={images} onSearch={handleSearch} />
                </motion.div>
            )}

            <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 1.0}}
                className="w-full"
            >
                <Footer source={data?.sourceUrls} />
            </motion.div>
        </motion.div>
    );
}

export default App;
