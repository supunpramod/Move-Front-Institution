export default function Card({
  title,
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-secondary rounded-xl p-6 
hover:shadow-xl hover:-translate-y-1 
hover:scale-[1.02] 
transition-all duration-300 ease-out 
${className}`}

    >
      {title && (
        <h3 className="text-lg font-semibold text-white mb-3">
          {title}
        </h3>
      )}

      <div className="text-white text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
