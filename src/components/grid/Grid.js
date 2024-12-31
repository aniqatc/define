import Letter from './Letter';
import Word from './Word';
import Definition from './Definition';
import Related from './Related';
import Gallery from './Gallery';

function Grid() {
    return (
        <div className="my-3 w-full">
            <div className="flex gap-2">
                <Letter word="Hello" />
                <Word />
            </div>
            <Definition />
            <Related />
            <Gallery />
        </div>
    )
}

export default Grid;