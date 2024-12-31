import Logo from './Logo';
import OptionsWrapper from './OptionsWrapper';

function Header() {
    return (
        <div className="flex justify-between items-center w-full">
            <Logo />
            <OptionsWrapper />
        </div>
    )
}

export default Header;