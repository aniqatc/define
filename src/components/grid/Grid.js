import Letter from './Letter';
import Word from './Word';
import Definition from './Definition';
import Related from './Related';
import Gallery from './Gallery';

function Grid() {
    return (
        <div className="my-3 w-full flex flex-col gap-2">
            <div className="flex gap-2">
                <Letter word="Hello" />
                <Word />
            </div>
            <div className="flex gap-2">
                <Definition />
                <Definition />
                <Definition />
            </div>
            <Related />
            <Gallery />
        </div>
    )
}

export default Grid;