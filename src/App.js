import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Header from './components/header/Header';
import SearchContainer from './components/search/SearchContainer';
import Grid from './components/grid/Grid';
import Footer from './components/footer/Footer';

import { fetchWordData } from "./data/api";

function App() {
    const [word, setWord] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchWordData("company");
                setData(result);
                setWord("company");
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [word]);


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen w-full p-4 flex flex-col justify-center items-center max-w-screen-md mx-auto
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
                <SearchContainer />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="w-full"
            >
                <Grid data={data} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="w-full"
            >
                <Footer source={data?.sourceUrls} />
            </motion.div>
        </motion.div>
    );
}

export default App;
