function BaseCard({ children, className = "" }) {
    return (
        <div className={`${className} shadow-sm rounded-md bg-slate-200 border border-slate-300`}>
            {children}
        </div>
    )
}

export default BaseCard;