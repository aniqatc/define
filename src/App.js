import './App.css';

import Header from './components/header/Header';

function App() {
  return (
    <div className="App min-h-screen w-full p-4 flex flex-col justify-center items-center max-w-screen-md mx-auto
            transition-colors duration-200">
        <Header />
        {/* Search => Input & Suggestions */}
        {/* Grid => Results (Data) */}
        {/* Footer => Attributions */}

    </div>
  );
}

export default App;
