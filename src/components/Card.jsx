export default function Card({
  title,
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-xl p-6 border border-primary 
hover:shadow-xl hover:-translate-y-1 
hover:scale-[1.02] 
transition-all duration-300 ease-out 
${className}`}

    >
      {title && (
        <h3 className="text-lg font-semibold text-secondary mb-3">
          {title}
        </h3>
      )}

      <div className="text-fon text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
