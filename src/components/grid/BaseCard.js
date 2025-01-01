function BaseCard({ children, className = "" }) {
    return (
        <div className={`${className} shadow-sm rounded-md bg-slate-200 border border-slate-300
            dark:bg-neutral-800 dark:border-neutral-700`}>
            {children}
        </div>
    )
}

export default BaseCard;