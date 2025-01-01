function Suggestions({ onSuggest }) {
    return (
        <div className="mt-3 mx-1 flex gap-2 items-center">
            <p className="text-gray-400 text-xs shrink-0">Suggestions:</p>
            <ul className="text-gray-500 flex gap-2 text-sm overflow-hidden">
                {["book", "flower", "sunset", "jubilant", "maelstrom", "joy"]
                    .map((word, index) => (
                        <li key={index} className={`
                                ${index >= 3 && 'hidden'}          
                                ${index === 3 && 'xs:block'} 
                                ${index === 4 && 'sm:block'}      
                                ${index === 5 && 'md:block'}      
                           `}>
                            <button onClick={() => onSuggest(word)}
                                className="bg-gray-300 px-2 rounded-full hover:bg-gray-500 hover:text-gray-200 transition-colors">
                                {word}
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Suggestions;