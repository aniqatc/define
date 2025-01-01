function WordList({ words, onSuggest }) {
    return (
        <ul className="text-slate-500 flex gap-2 text-sm flex-wrap">
            {words.map((word, index) => (
                    <li key={index}>
                        <button onClick={() => onSuggest(word)}
                            className="bg-slate-300 px-2 rounded-full
                            hover:bg-slate-400 hover:text-slate-200
                            transition-colors
                            dark:bg-gray-700
                            px-2 rounded-full
                            hover:bg-slate-500
                            dark:text-slate-300
                            dark:hover:bg-gray-600
                            ocean:bg-blue-200
                            ocean:hover:text-blue-900
                            ocean:hover:bg-blue-300
                            forest:bg-green-200
                            forest:text-green-700
                            forest:hover:text-green-900
                            forest:hover:bg-green-300">
                            {word}
                        </button>
                    </li>
                ))}
        </ul>
    )
}

export default WordList;