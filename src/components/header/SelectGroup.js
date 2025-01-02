import FontSelect from './FontSelect';
import ThemeSelect from './ThemeSelect';

function SelectGroup() {
  return (
    <div className="flex items-center justify-center gap-2">
      <FontSelect />
      <ThemeSelect />
    </div>
  );
}

export default SelectGroup;
