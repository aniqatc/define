import BaseCard from './BaseCard';

function Gallery({ content }) {
    if (content.total_results === 0) return;

    const { photos } = content;
    return (
        <BaseCard className="p-3 flex gap-2">
            {photos.slice(0, 5).map((image, index) => (
                <a
                    href={image.url}
                    key={image.id || index}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`${index === 3 ? 'hidden xs:block' : 'w-40'}
                        ${index === 4 ? 'hidden sm:block' : 'w-40'}`}
                >
                    <img
                        src={image.src.portrait}
                        alt={image.alt}
                        className="object-cover border border-slate-500 opacity-65
                        h-40 w-full aspect-square grayscale rounded-md shadow-md
                        duration-200 transition-all hover:opacity-90 hover:grayscale-0"
                    />
                </a>
            ))}
        </BaseCard>
    )
}

export default Gallery;