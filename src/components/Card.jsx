export default function Card({
  title,
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition ${className}`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-slate-900 mb-3">
          {title}
        </h3>
      )}

      <div className="text-slate-600 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
