export default function Section({
  title,
  subtitle,
  children,
  id,
  className = "",
}) {
  return (
    <section id={id} className={`py-10 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">

        {/* Title Area */}
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="text-white mt-1 max-w-2xl mx-auto text-sm md:text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        {children}
      </div>
    </section>
  );
}
