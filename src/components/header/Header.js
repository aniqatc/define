import Logo from './Logo';
import SelectGroup from './SelectGroup';

function Header() {
  return (
    <header className="flex justify-between items-center w-full my-3">
      <Logo />
      <SelectGroup />
    </header>
  );
}

export default Header;
