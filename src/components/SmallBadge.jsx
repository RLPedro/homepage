const SmallBadge = ({ children, href }) => {
    const inner = (
        <span className="inline-flex items-center gap-2 px-2 py-1 text-xs rounded-md bg-white/6 text-yellow-500">
            {children}
        </span>
    );
    return href ? (
        <a href={href} target="_blank" rel="noreferrer" aria-label={`${children} (opens in new tab)`}>
            {inner}
        </a>
    ) : (
        inner
    );
};

export default SmallBadge;
