import BaseCard from './BaseCard';

function Letter({ word }) {
    const letters = word.split("");
    const uppercase = letters[0].toUpperCase();
    const lowercase = letters[0].toLowerCase();

    return (
        <BaseCard className="px-4 py-5">
            <p className="text-5xl font-semibold">{uppercase}{lowercase}</p>
        </BaseCard>
    )
}

export default Letter;