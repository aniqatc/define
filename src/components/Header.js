import Logo from './Logo';
import SelectGroup from "./SelectGroup";

function Header() {
    return (
        <div className="flex justify-between items-center w-full my-3">
            <Logo />
            <SelectGroup />
        </div>
    )
}

export default Header;