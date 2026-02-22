export default function Card({
  title,
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-[#D4A373] rounded-xl p-6 
hover:shadow-xl hover:-translate-y-1 
hover:scale-[1.02] 
transition-all duration-300 ease-out 
${className}`}

    >
      {title && (
        <h3 className="text-lg font-semibold text-[#1F3A5F] mb-3">
          {title}
        </h3>
      )}

      <div className="text-[#2E3A44] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
