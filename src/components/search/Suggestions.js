function Suggestions({ onSuggest }) {
    return (
        <div className="mt-3 mx-1 flex gap-2 items-center">
            <p className="text-slate-400 text-xs shrink-0">Suggestions:</p>
            <ul className="text-gray-500 flex gap-2 text-sm overflow-hidden">
                {["book", "flower", "sunset", "jubilant", "love", "joy", "twilight"]
                    .map((word, index) => (
                        <li key={index} className={`
                                ${index >= 3 && 'hidden'}          
                                ${index === 3 && 'xs:block'} 
                                ${index === 4 && 'xs:block'}      
                                ${index === 5 && 'sm:block'}      
                                ${index === 6 && 'md:block'}
                           `}>
                            <button onClick={() => onSuggest(word)}
                                className="dark:bg-neutral-800
                                    px-2 rounded-full
                                    hover:bg-neutral-400
                                    ocean:bg-blue-200
                                    ocean:text-sky-900
                                    ocean:hover:bg-blue-300
                                    dark:hover:bg-neutral-700
                                    dark:text-neutral-300
                                    bg-gray-300 px-2 rounded-full
                                    hover:bg-gray-600 hover:text-gray-200
                                    transition-all">
                                {word}
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Suggestions;