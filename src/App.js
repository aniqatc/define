import './App.css';

import Header from './components/header/Header';
import SearchContainer from './components/search/SearchContainer';
import Grid from './components/grid/Grid';

function App() {
  return (
    <div className="min-h-screen w-full p-4 flex flex-col justify-center items-center max-w-screen-md mx-auto
            transition-colors duration-200">
        <Header />
        <SearchContainer />
        <Grid />
        {/* Footer => Attributions */}
    </div>
  );
}

export default App;
