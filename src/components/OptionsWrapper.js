import FontOptions from './FontOptions';
import ThemeOptions from './ThemeOptions';

function OptionsWrapper() {
    return (
        <div className="flex items-center justify-center gap-2">
            <FontOptions />
            <ThemeOptions />
        </div>
    )
}

export default OptionsWrapper;