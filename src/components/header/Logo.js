import { Book } from 'lucide-react';

function Logo() {
    return (
        <div className="flex justify-center items-center gap-1">
            <Book size={32} />
            <h1 className="text-xl font-medium">define</h1>
        </div>
    )
}

export default Logo;