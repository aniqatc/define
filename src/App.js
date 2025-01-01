import Header from './components/header/Header';
import SearchContainer from './components/search/SearchContainer';
import Grid from './components/grid/Grid';
import Footer from "./components/footer/Footer"

import { motion } from 'framer-motion';

function App() {
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
                <Grid />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="w-full"
            >
                <Footer />
            </motion.div>
        </motion.div>
    );
}

export default App;
