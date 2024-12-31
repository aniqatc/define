function Suggestions() {
    return (
        <div className="mt-3 mx-1 flex gap-2 items-center">
            <p className="text-gray-400 text-xs">Suggestions:</p>
            <ul className="text-slate-100 flex gap-2 text-sm">
                {["whimsical", "sunset", "jubilant", "maelstrom", "serendipidity"]
                    .map((word, index) => (
                        <li key={index}>
                            <button className="bg-slate-400 px-2 py-0.5 rounded-full hover:bg-slate-500 transition-colors">
                                {word}
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Suggestions;