import { UserRound, AlignJustify } from "lucide-react";

function Footer() {
    return (
        <footer className="flex justify-between w-full px-2 mt-2 text-sm opacity-80">
            <p className="text-gray-500 flex items-center gap-1 text-sm">
                <AlignJustify size={16} strokeWidth={2} className="inline-block"/> Source:
                <a href="https://wikipedia.org"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="font-medium hover:text-gray-900 transition-colors"
                >Wikipedia
                </a>
            </p>
            <p className="text-gray-500 flex items-center gap-1 text-sm">
                <UserRound size={16} strokeWidth={2} className="inline-block"/> Coded by
                <a href="https://github.com/aniqatc"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="font-medium hover:text-gray-900 transition-colors"
                >
                    Aniqa
                </a>
            </p>
        </footer>
    )
}

export default Footer;