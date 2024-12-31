import { Volume2 } from 'lucide-react';
import BaseCard from './BaseCard';

function Word() {
    return (
        <BaseCard className="px-4 py-3 w-full flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Onomatopoeia</h2>
            <div className="flex items-center gap-2">
                <Volume2 strokeWidth={2.2} size={20} />
                <span className="italic text-sm">/ˌänəˌmädəˈpēə,ˌänəˌmadəˈpēə/</span>
            </div>
        </BaseCard>
    )
}

export default Word;