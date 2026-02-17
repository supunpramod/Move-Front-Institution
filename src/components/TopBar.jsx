export default function TopBar() {
  return (
    <div className="bg-brand-900 text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <span>📍 No 310, Oruwella Road, Katuneriya, Sri Lanka</span>
          <span>📞 031 2252610 / 0777559177 / 0712007295</span>
          <span>✉️ chamika1969@gmail.com</span>
        </div>
        <div className="flex gap-3">
          <a className="hover:underline" href="#" aria-label="facebook">Facebook</a>
          <a className="hover:underline" href="#" aria-label="youtube">YouTube</a>
        </div>
      </div>
    </div>
  );
}
