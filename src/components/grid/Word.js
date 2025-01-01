import { Volume2 } from 'lucide-react';
import BaseCard from './BaseCard';

function Word({ data }) {
    function handleAudio() {
        if (!data.phonetics[0].audio) return;
        const audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }

    return (
        <BaseCard className="px-4 py-3 w-full flex flex-col gap-1">
            <h2 className="text-2xl font-semibold capitalize">{data.word}</h2>
            <div className="flex items-center gap-2">
                <button className="p-1 -m-1 text-slate-600"><Volume2 strokeWidth={2.2} size={20} onClick={handleAudio}/></button>
                <span className="italic text-sm text-slate-700">{data.phonetic || data.phonetics.find(phonetic => phonetic.text)?.text}</span>
            </div>
        </BaseCard>
    )
}

export default Word;