function BaseCard({ children, className = '' }) {
  return (
    <div
      className={`${className} shadow-sm rounded-md bg-slate-200 border border-slate-300
            dark:bg-neutral-800 dark:border-neutral-700
            ocean:bg-blue-100 ocean:border-blue-200
            forest:bg-[#02160a] forest:border-green-950`}
    >
      {children}
    </div>
  );
}

export default BaseCard;
