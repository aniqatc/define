import BaseCard from './BaseCard';

function Gallery({ content }) {
    if (content.total_results === 0) return;
    const { photos } = content;
    return (
        <BaseCard className="p-3 text-xs text-slate-500 flex gap-2">
            {photos.slice(0, 5).map((image, index) => (
                <a
                    href={image.url}
                    key={image.id || index}
                    className={`
                        ${index === 3 ? 'hidden xs:block' : 'w-40'}
                        ${index === 4 ? 'hidden sm:block' : 'w-40'}
                        relative
                    `}
                >
                    <img
                        src={image.src.portrait}
                        alt={image.alt || 'Gallery image'}
                        className="object-cover border border-slate-500 opacity-75 h-40 w-full aspect-square grayscale rounded-md shadow-md"
                    />
                </a>
            ))}
        </BaseCard>
    )
}

export default Gallery;