function WordList({ words, onSuggest }) {
    return (
        <ul className="text-slate-500 flex gap-2 text-sm flex-wrap">
            {words.map((word, index) => (
                    <li key={index}>
                        <button onClick={() => onSuggest(word)}
                            className="bg-slate-300 px-2 rounded-full hover:bg-slate-500 hover:text-slate-200 transition-colors">
                            {word}
                        </button>
                    </li>
                ))}
        </ul>
    )
}

export default WordList;