export default function VideoSection() {
  return (
    <section id="video" className="py-24 lg:py-32 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-200 text-blue-600 text-xs font-semibold mb-5 tracking-wide uppercase">
            <svg
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Demo
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            See Wayfinder in Action
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Watch a full walkthrough - from installing the app to your first
            GPS-powered delivery.
          </p>
        </div>

        {/* Video embed */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-200/60 ring-1 ring-white">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/0b9Ss_-9fZI"
                title="Wayfinder - Local Delivery GPS App Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
