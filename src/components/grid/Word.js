import { Volume2, VolumeOff } from 'lucide-react';
import BaseCard from './BaseCard';

function Word({ data }) {
    const audioUrl = data?.phonetics?.find(phonetic => phonetic?.audio)?.audio; // find the phonetic with audio
    const phoneticText = data?.phonetic || data?.phonetics?.find(phonetic => phonetic?.text)?.text; // find the phonetic with text

    function handleAudio() {
        if (!audioUrl) return;
        const audio = new Audio(audioUrl);
        audio.play();
    }

    return (
        <BaseCard className="px-4 py-3 w-full flex flex-col gap-1 justify-center">
            <h2 className="text-2xl font-semibold capitalize">{data.word}</h2>
            {audioUrl && (<div className="flex items-center gap-2">
                <button className="p-1 -m-1 text-slate-600 dark:text-slate-300 forest:text-gray-300"
                        onClick={handleAudio}>
                    {!audioUrl
                        ? <VolumeOff strokeWidth={2.2} size={20} className="text-gray-400 forest:text-gray-500"/>
                        : <Volume2 strokeWidth={2.2} size={20}/>}
                </button>
                <span
                    className="italic text-sm text-slate-700 dark:text-slate-400 forest:text-gray-400">{phoneticText}</span>
            </div>)}
        </BaseCard>
    )
}

export default Word;