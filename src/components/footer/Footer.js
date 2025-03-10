import { UserRound, AlignJustify } from 'lucide-react';

function Footer({ source }) {
  return (
    <footer className="text-gray-500 dark:text-gray-300 forest:text-gray-300 flex flex-wrap gap-1 justify-between w-full px-2 pb-4 mt-3 text-sm opacity-80">
      {source && source.length > 0 && (
        <p className="flex items-center gap-1 text-sm">
          <AlignJustify size={16} strokeWidth={2} className="inline-block" /> Source:
          <a
            href={source[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-gray-900 dark:hover:text-white ocean:text-blue-900 ocean:hover:text-black forest:text-green-300 forest:hover:text-green-50 transition-colors"
          >
            {new URL(source[0]).hostname}
          </a>
        </p>
      )}
      <p className="flex items-center gap-1 text-sm">
        <UserRound size={16} strokeWidth={2} className="inline-block" /> Coded by
        <a
          href="https://github.com/aniqatc"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-0.5 font-medium hover:text-gray-900 dark:hover:text-white ocean:text-blue-900 ocean:hover:text-black forest:text-green-300 forest:hover:text-green-50  transition-colors"
        >
          Aniqa
        </a>
      </p>
    </footer>
  );
}

export default Footer;
