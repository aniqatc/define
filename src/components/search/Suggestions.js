function Suggestions() {
    return (
        <div className="mt-3 mx-1 flex gap-2 items-center">
            <p className="text-gray-400 text-xs shrink-0">Suggestions:</p>
            <ul className="text-slate-500 flex gap-2 text-sm overflow-hidden">
                {["whimsical", "sunset", "jubilant", "maelstrom", "serendipidity", "flower"]
                    .map((word, index) => (
                        <li key={index} className={`
                                ${index >= 3 && 'hidden'}          
                                ${index === 3 && 'xs:block'} 
                                ${index === 4 && 'sm:block'}      
                                ${index === 5 && 'md:block'}      
                           `}>
                            <button
                                className="bg-slate-300 px-2 rounded-full hover:bg-slate-500 hover:text-slate-200 transition-colors">
                                {word}
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Suggestions;